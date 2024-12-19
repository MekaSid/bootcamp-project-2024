import mongoose, { Schema } from "mongoose";

export type Blog = {
    title: string;
    slug: string;
    date: Date;
    description: string;
    content: string;
    image: string;
    imageAlt: string;
    comments: IComment[];
}

export type IComment = {
    user: string;
    content: string;
    time: Date;
}

const commentSchema = new Schema<IComment>({
    user: {type: String, required: true},
    content: {type: String, required: true},
    time: { type: Date, required: true, default: new Date()}
})

const blogSchema = new Schema<Blog>({
    title: { type: String, required: true },
    slug: { type: String, required: true},
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true},
    content: { type: String, required: true },
    image: {type: String, required: true},
    imageAlt: {type: String, required: true},
    comments: [commentSchema]
});

const BlogModel = mongoose.models['blogs'] || mongoose.model('blogs', blogSchema);

export default BlogModel;