import { pgTable, text, serial, timestamp, boolean, json } from 'drizzle-orm/pg-core';
import { createInsertSchema } from 'drizzle-zod';
import { z } from 'zod';

// Menu Items
export const menuItems = pgTable('menu_items', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  price: text('price').notNull(),
  category: text('category').notNull(),
  isAvailable: boolean('is_available').default(true),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Gallery Images
export const galleryImages = pgTable('gallery_images', {
  id: serial('id').primaryKey(),
  url: text('url').notNull(),
  alt: text('alt').notNull(),
  category: text('category').notNull(),
  description: text('description'),
  filename: text('filename'),
  filepath: text('filepath'),
  isFeatured: boolean('is_featured').default(false),
  isActive: boolean('is_active').default(true),
  order: serial('order'),
  createdAt: timestamp('created_at').defaultNow(),
});

// Restaurant Information
export const restaurantInfo = pgTable('restaurant_info', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  description: text('description'),
  address: text('address'),
  phone: text('phone'),
  email: text('email'),
  hours: json('hours'),
  socialMedia: json('social_media'),
  updatedAt: timestamp('updated_at').defaultNow(),
});

// Reviews
export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  customerName: text('customer_name').notNull(),
  rating: text('rating').notNull(),
  comment: text('comment').notNull(),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at').defaultNow(),
});

// Zod Schemas
export const insertMenuItemSchema = createInsertSchema(menuItems).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertGalleryImageSchema = createInsertSchema(galleryImages).omit({
  id: true,
  createdAt: true,
});

export const insertRestaurantInfoSchema = createInsertSchema(restaurantInfo).omit({
  id: true,
  updatedAt: true,
});

export const insertReviewSchema = createInsertSchema(reviews).omit({
  id: true,
  createdAt: true,
});

// Types
export type MenuItem = typeof menuItems.$inferSelect;
export type InsertMenuItem = z.infer<typeof insertMenuItemSchema>;

export type GalleryImage = typeof galleryImages.$inferSelect;
export type InsertGalleryImage = z.infer<typeof insertGalleryImageSchema>;

export type RestaurantInfo = typeof restaurantInfo.$inferSelect;
export type InsertRestaurantInfo = z.infer<typeof insertRestaurantInfoSchema>;

export type Review = typeof reviews.$inferSelect;
export type InsertReview = z.infer<typeof insertReviewSchema>;