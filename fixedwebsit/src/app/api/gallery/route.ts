import { NextResponse } from "next/server";
import dbConnect from "@/database/db";
import gallerySchema from "@/database/gallerySchema";

export async function GET() {
  await dbConnect(); // Ensure the database is connected

  try {
    // Fetch all gallery items
    const gallery = await gallerySchema.find({});

    // Respond with JSON
    return NextResponse.json(
      { success: true, data: gallery },
      { status: 200 }
    );
  } catch (error: unknown) {
    // Handle the error safely
    console.error("Error fetching gallery:", error);

    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { success: false, error: `Failed to fetch gallery items: ${errorMessage}` },
      { status: 500 }
    );
  }
}
