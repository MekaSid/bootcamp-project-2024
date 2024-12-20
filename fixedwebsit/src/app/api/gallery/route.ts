import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/database/db";
import gallerySchema from "@/database/gallerySchema";

export async function GET(req: NextRequest) {
  await dbConnect(); // Ensure the database is connected

  try {
    // Fetch all gallery items
    const gallery = await gallerySchema.find({});
    
    // Respond with JSON
    return NextResponse.json(
      { success: true, data: gallery },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching gallery:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch gallery items." },
      { status: 500 }
    );
  }
}
