import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

// ES module equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Basic logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      console.log(logLine);
    }
  });

  next();
});

// Basic API routes
app.get('/api/menu-items', (req, res) => {
  res.json([
    {
      id: 1,
      name: "Griot Traditionnel",
      description: "Porc marinéet frit, accompagné de bananes plantains",
      price: "250 HTG",
      category: "Plats Principaux",
      isAvailable: true,
      image: null
    },
    {
      id: 2,
      name: "Poulet Créole",
      description: "Poulet mijoté dans une sauce épicée aux légumes créoles",
      price: "200 HTG",
      category: "Plats Principaux",
      isAvailable: true,
      image: null
    }
  ]);
});

app.get('/api/restaurant-info', (req, res) => {
  res.json([{
    id: 1,
    name: "Restaurant Idgie",
    description: "Restaurant authentique haïtien situé à Delmas",
    address: "Delmas, Port-au-Prince, Haïti",
    phone: "+509 1234-5678",
    email: "contact@restaurant-idgie.com",
    hours: {
      "monday": "9:00 AM - 9:00 PM",
      "tuesday": "9:00 AM - 9:00 PM",
      "wednesday": "9:00 AM - 9:00 PM",
      "thursday": "9:00 AM - 9:00 PM",
      "friday": "9:00 AM - 10:00 PM",
      "saturday": "9:00 AM - 10:00 PM",
      "sunday": "10:00 AM - 8:00 PM"
    },
    socialMedia: {
      facebook: "https://facebook.com/restaurant-idgie",
      instagram: "@restaurant_idgie"
    }
  }]);
});

app.get('/api/reviews', (req, res) => {
  res.json([
    {
      id: 1,
      customerName: "Marie Dupont",
      rating: "5",
      comment: "Excellent service et nourriture délicieuse! Le griot était parfait.",
      isActive: true,
      createdAt: new Date().toISOString()
    },
    {
      id: 2,
      customerName: "Jean Baptiste",
      rating: "4",
      comment: "Très bon restaurant, ambiance agréable. Je recommande!",
      isActive: true,
      createdAt: new Date().toISOString()
    }
  ]);
});

app.get('/api/gallery', (req, res) => {
  res.json([
    {
      id: 1,
      url: "/api/placeholder-food.jpg",
      alt: "Griot traditionnel avec bananes",
      category: "plats",
      description: "Notre spécialité griot",
      isActive: true,
      order: 1
    },
    {
      id: 2,
      url: "/api/placeholder-restaurant.jpg", 
      alt: "Intérieur du restaurant",
      category: "restaurant",
      description: "Notre salle principale",
      isActive: true,
      order: 2
    }
  ]);
});

// Error handling middleware
app.use((err, req, res, next) => {
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
  console.error(err);
});

// Serve static files from client/dist if in production
if (process.env.NODE_ENV !== 'development') {
  app.use(express.static(path.join(__dirname, '../client/dist')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// Start server
const port = 5000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});