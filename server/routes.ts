import type { Express } from "express";
import { createServer, type Server } from "http";
import express from "express";
import { storage } from "./storage";
import { insertMenuItemSchema, insertGalleryImageSchema, insertRestaurantInfoSchema, insertReviewSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configuration multer pour le téléchargement d'images
const storage_multer = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(process.cwd(), 'uploads', 'gallery');
    fs.mkdirSync(uploadPath, { recursive: true });
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage_multer,
  fileFilter: (req, file, cb) => {
    // Vérifier le type de fichier
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Seuls les fichiers images sont autorisés'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB max
  }
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Servir les fichiers statiques uploadés
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

  // Health check
  app.get("/api", (req, res) => {
    res.json({ message: "Idgie's Restaurant API" });
  });

  // Menu Items
  app.get("/api/menu", async (req, res) => {
    try {
      const items = await storage.getMenuItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  app.post("/api/menu", async (req, res) => {
    try {
      const validatedData = insertMenuItemSchema.parse(req.body);
      const item = await storage.createMenuItem(validatedData);
      res.status(201).json(item);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to create menu item" });
    }
  });

  app.put("/api/menu/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const partialData = insertMenuItemSchema.partial().parse(req.body);
      const item = await storage.updateMenuItem(id, partialData);
      res.json(item);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to update menu item" });
    }
  });

  app.delete("/api/menu/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteMenuItem(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete menu item" });
    }
  });

  // Gallery Images
  app.get("/api/gallery", async (req, res) => {
    try {
      const images = await storage.getGalleryImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch gallery images" });
    }
  });

  app.post("/api/gallery", async (req, res) => {
    try {
      const validatedData = insertGalleryImageSchema.parse(req.body);
      const image = await storage.createGalleryImage(validatedData);
      res.status(201).json(image);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to create gallery image" });
    }
  });

  app.put("/api/gallery/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const partialData = insertGalleryImageSchema.partial().parse(req.body);
      const image = await storage.updateGalleryImage(id, partialData);
      res.json(image);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to update gallery image" });
    }
  });

  app.delete("/api/gallery/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteGalleryImage(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete gallery image" });
    }
  });

  // Upload d'images pour la galerie
  app.post("/api/gallery/upload", upload.array('images', 10), async (req, res) => {
    try {
      const files = req.files as Express.Multer.File[];
      if (!files || files.length === 0) {
        return res.status(400).json({ error: "Aucune image téléchargée" });
      }

      const uploadedImages = [];
      
      for (const file of files) {
        const imageData = {
          url: `/uploads/gallery/${file.filename}`,
          alt: req.body.alt || `Image Idgie's Restaurant - ${file.originalname}`,
          category: req.body.category || 'Plats',
          description: req.body.description || 'Image téléchargée localement',
          filename: file.originalname,
          filepath: file.path,
          isFeatured: req.body.isFeatured === 'true' || false
        };
        
        const image = await storage.createGalleryImage(imageData);
        uploadedImages.push(image);
      }

      res.status(201).json({
        message: `${uploadedImages.length} image(s) téléchargée(s) avec succès`,
        images: uploadedImages
      });
      
    } catch (error: any) {
      console.error('Erreur lors du téléchargement:', error);
      res.status(500).json({ error: "Erreur lors du téléchargement des images" });
    }
  });

  // Upload d'images depuis URL
  app.post("/api/gallery/from-url", async (req, res) => {
    try {
      const { url, alt, category, description, isFeatured } = req.body;
      
      if (!url) {
        return res.status(400).json({ error: "URL requise" });
      }

      const imageData = {
        url,
        alt: alt || 'Image Idgie\'s Restaurant',
        category: category || 'Plats',
        description: description || 'Image ajoutée depuis URL',
        isFeatured: isFeatured || false
      };
      
      const image = await storage.createGalleryImage(imageData);
      res.status(201).json(image);
      
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Erreur lors de l'ajout de l'image" });
    }
  });

  // Endpoint pour obtenir les images en vedette
  app.get("/api/gallery/featured", async (req, res) => {
    try {
      const images = await storage.getFeaturedGalleryImages();
      res.json(images);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch featured images" });
    }
  });

  // Restaurant Info
  app.get("/api/restaurant-info", async (req, res) => {
    try {
      const info = await storage.getRestaurantInfo();
      res.json(info);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch restaurant info" });
    }
  });

  app.put("/api/restaurant-info", async (req, res) => {
    try {
      const validatedData = insertRestaurantInfoSchema.partial().parse(req.body);
      const info = await storage.updateRestaurantInfo(validatedData);
      res.json(info);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to update restaurant info" });
    }
  });

  // Reviews
  app.get("/api/reviews", async (req, res) => {
    try {
      const reviews = await storage.getReviews();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reviews" });
    }
  });

  app.post("/api/reviews", async (req, res) => {
    try {
      const validatedData = insertReviewSchema.parse(req.body);
      const review = await storage.createReview(validatedData);
      res.status(201).json(review);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to create review" });
    }
  });

  app.put("/api/reviews/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const partialData = insertReviewSchema.partial().parse(req.body);
      const review = await storage.updateReview(id, partialData);
      res.json(review);
    } catch (error: any) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ error: fromZodError(error).toString() });
      }
      res.status(500).json({ error: "Failed to update review" });
    }
  });

  app.delete("/api/reviews/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await storage.deleteReview(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete review" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
