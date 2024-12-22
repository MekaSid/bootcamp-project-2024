import { NextResponse } from "next/server";
import dbConnect from "@/database/db";
import Project from "@/database/projectSchema";

export async function GET() { // Removed req parameter
  await dbConnect(); // Connect to MongoDB

  try {
    const projects = await Project.find({});
    return NextResponse.json(projects, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: 'Failed to fetch projects.' }, { status: 500 });
  }
}
