import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/database/db";
import Blog from "@/database/blogSchema"; // Our Mongoose model

interface CommentRequest {
  user: string;
  content: string;
}

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

    const body: CommentRequest = await req.json();

    if (!body.user || !body.content) {
      return NextResponse.json(
        { error: "User and content are required" },
        { status: 400 }
      );
    }

    const blog = await Blog.findOne({ slug }).orFail();
    blog.comments.push({ user: body.user, content: body.content, date: new Date() });
    await blog.save();

    return NextResponse.json(blog.comments, { status: 200 });
  } catch (error: unknown) {
    console.error("Error saving comment:", error);

    const status = error instanceof Error && error.name === "DocumentNotFoundError" ? 404 : 500;
    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      { error: errorMessage },
      { status }
    );
  }
}
