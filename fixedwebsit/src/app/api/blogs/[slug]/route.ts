// src/app/api/blogs/[slug]/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import blogSchema from "@/database/blogSchema";

interface RouteContext {
  params: { [key: string]: string };
  searchParams: URLSearchParams;
}

export async function GET(req: NextRequest, context: RouteContext) {
  const { slug } = context.params; // Access slug from params

  if (!slug) {
    return NextResponse.json({ error: "Slug is missing." }, { status: 400 });
  }

  await connectDB(); // Connect to the database

  try {
    const blog = await blogSchema.findOne({ slug }).orFail();
    return NextResponse.json(blog);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Blog not found." }, { status: 404 });
  }
}
