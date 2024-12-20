import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
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

// Safely export the model
const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);

export default Gallery;
