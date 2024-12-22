// database/gallerySchema.ts

import mongoose, { Document, Schema } from "mongoose";

// 1. Define the interface for a Gallery document
export interface IGallery extends Document {
  src: string;
  alt: string;
  caption: string;
}

// 2. Define the Mongoose schema
const gallerySchema = new Schema(
  {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      required: true,
    },
  },
  { collection: "gallery" } // Specify the collection name
);

// 3. Create and export the Mongoose model with the interface
const Gallery =
  mongoose.models.Gallery || mongoose.model<IGallery>("Gallery", gallerySchema);

export default Gallery;
