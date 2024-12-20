import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  languages: [
    {
      icon: { type: String, required: true },
      name: { type: String, required: true },
    },
  ],
}, { collection: 'projects' });

// If the model already exists, use it; otherwise, create it.
export default mongoose.models.projects || mongoose.model('projects', projectSchema);
