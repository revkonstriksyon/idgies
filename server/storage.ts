import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { eq } from 'drizzle-orm';
import * as schema from '@shared/schema';
import type {
  MenuItem,
  InsertMenuItem,
  GalleryImage,
  InsertGalleryImage,
  RestaurantInfo,
  InsertRestaurantInfo,
  Review,
  InsertReview,
} from '@shared/schema';

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

export interface IStorage {
  // Menu Items
  getMenuItems(): Promise<MenuItem[]>;
  createMenuItem(item: InsertMenuItem): Promise<MenuItem>;
  updateMenuItem(id: number, item: Partial<InsertMenuItem>): Promise<MenuItem>;
  deleteMenuItem(id: number): Promise<void>;

  // Gallery Images
  getGalleryImages(): Promise<GalleryImage[]>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  updateGalleryImage(id: number, image: Partial<InsertGalleryImage>): Promise<GalleryImage>;
  deleteGalleryImage(id: number): Promise<void>;

  // Restaurant Info
  getRestaurantInfo(): Promise<RestaurantInfo | null>;
  updateRestaurantInfo(info: Partial<InsertRestaurantInfo>): Promise<RestaurantInfo>;

  // Reviews
  getReviews(): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;
  updateReview(id: number, review: Partial<InsertReview>): Promise<Review>;
  deleteReview(id: number): Promise<void>;
}

export class DbStorage implements IStorage {
  // Menu Items
  async getMenuItems(): Promise<MenuItem[]> {
    return await db.select().from(schema.menuItems).orderBy(schema.menuItems.category, schema.menuItems.name);
  }

  async createMenuItem(item: InsertMenuItem): Promise<MenuItem> {
    const [created] = await db.insert(schema.menuItems).values(item).returning();
    return created;
  }

  async updateMenuItem(id: number, item: Partial<InsertMenuItem>): Promise<MenuItem> {
    const [updated] = await db
      .update(schema.menuItems)
      .set({ ...item, updatedAt: new Date() })
      .where(eq(schema.menuItems.id, id))
      .returning();
    return updated;
  }

  async deleteMenuItem(id: number): Promise<void> {
    await db.delete(schema.menuItems).where(eq(schema.menuItems.id, id));
  }

  // Gallery Images
  async getGalleryImages(): Promise<GalleryImage[]> {
    return await db.select().from(schema.galleryImages).where(eq(schema.galleryImages.isActive, true)).orderBy(schema.galleryImages.order);
  }

  async createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage> {
    const [created] = await db.insert(schema.galleryImages).values(image).returning();
    return created;
  }

  async updateGalleryImage(id: number, image: Partial<InsertGalleryImage>): Promise<GalleryImage> {
    const [updated] = await db
      .update(schema.galleryImages)
      .set(image)
      .where(eq(schema.galleryImages.id, id))
      .returning();
    return updated;
  }

  async deleteGalleryImage(id: number): Promise<void> {
    await db.update(schema.galleryImages).set({ isActive: false }).where(eq(schema.galleryImages.id, id));
  }

  // Restaurant Info
  async getRestaurantInfo(): Promise<RestaurantInfo | null> {
    const [info] = await db.select().from(schema.restaurantInfo).limit(1);
    return info || null;
  }

  async updateRestaurantInfo(info: Partial<InsertRestaurantInfo>): Promise<RestaurantInfo> {
    const existing = await this.getRestaurantInfo();
    
    if (existing) {
      const [updated] = await db
        .update(schema.restaurantInfo)
        .set({ ...info, updatedAt: new Date() })
        .where(eq(schema.restaurantInfo.id, existing.id))
        .returning();
      return updated;
    } else {
      const [created] = await db.insert(schema.restaurantInfo).values(info as InsertRestaurantInfo).returning();
      return created;
    }
  }

  // Reviews
  async getReviews(): Promise<Review[]> {
    return await db.select().from(schema.reviews).where(eq(schema.reviews.isActive, true)).orderBy(schema.reviews.createdAt);
  }

  async createReview(review: InsertReview): Promise<Review> {
    const [created] = await db.insert(schema.reviews).values(review).returning();
    return created;
  }

  async updateReview(id: number, review: Partial<InsertReview>): Promise<Review> {
    const [updated] = await db
      .update(schema.reviews)
      .set(review)
      .where(eq(schema.reviews.id, id))
      .returning();
    return updated;
  }

  async deleteReview(id: number): Promise<void> {
    await db.update(schema.reviews).set({ isActive: false }).where(eq(schema.reviews.id, id));
  }
}

export const storage = new DbStorage();