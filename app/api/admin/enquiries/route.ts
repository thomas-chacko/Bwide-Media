import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Enquiry from "@/models/Enquiry";

// GET - Fetch all enquiries
export async function GET() {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const enquiries = await Enquiry.find()
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({
      success: true,
      data: enquiries,
      count: enquiries.length,
    });
  } catch (error) {
    console.error("Fetch enquiries error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}
