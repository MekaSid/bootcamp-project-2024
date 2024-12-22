// src/app/api/blogs/[slug]/comments/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema"; // Our Mongoose model

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const slug = req.nextUrl.pathname.split("/blogs/")[1]?.split("/")[0];
    console.log(`Received POST request for slug: ${slug}`);

    if (!slug) {
      return NextResponse.json(
        { error: "Slug is missing from the request URL." },
        { status: 400 }
      );
    }

    const { user, content } = await req.json();

    if (!user || !content) {
      return NextResponse.json(
        { error: "User and content are required" },
        { status: 400 }
      );
    }

    const blog = await Blog.findOne({ slug }).orFail();
    blog.comments.push({ user, content, date: new Date() });
    await blog.save();

    return NextResponse.json(blog.comments, { status: 200 });
  } catch (error: any) {
    console.error("Error saving comment:", error);
    const status = error.name === "DocumentNotFoundError" ? 404 : 500;
    return NextResponse.json(
      { error: "Blog not found." },
      { status }
    );
  }
}
