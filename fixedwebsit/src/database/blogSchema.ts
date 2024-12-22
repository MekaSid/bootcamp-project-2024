// database/blogSchema.ts

import mongoose, { Schema, Document } from "mongoose";

export interface IComment {
  user: string;
  content: string;
  date: Date;
}

export interface IBlog extends Document {
  title: string;
  slug: string;
  date: Date;
  image: string;
  imageAlt: string;
  description: string;
  content: string;        // main blog content
  comments: IComment[];
}

// Create Mongoose schema for the Blog
const blogSchema = new Schema<IBlog>({
  title: { type: String, required: true },
  slug: { type: String, required: true },
  date: { type: Date, default: Date.now }, // blog creation date
  image: { type: String },
  imageAlt: { type: String },
  description: { type: String, required: true },
  content: { type: String, required: true },
  comments: [
    {
      user: { type: String, required: true },
      content: { type: String, required: true },
      date: { type: Date, required: true, default: Date.now },
    },
  ],
});

// Define the Mongoose model
const Blog = mongoose.models["blogs"] || mongoose.model<IBlog>("blogs", blogSchema);
export default Blog;
