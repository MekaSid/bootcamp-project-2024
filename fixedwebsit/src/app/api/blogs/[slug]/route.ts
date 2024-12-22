import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

export async function GET(req: NextRequest, context: { params: { slug: string } }) {
  const { slug } = context.params; // Access slug from context.params
  await connectDB(); // Connect to the database

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}
