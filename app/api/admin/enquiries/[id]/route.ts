import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import connectDB from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import mongoose from "mongoose";

// GET - Fetch single enquiry
export async function GET(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry ID" },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.findById(id);

    if (!enquiry) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: enquiry,
    });
  } catch (error) {
    console.error("Fetch enquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch enquiry" },
      { status: 500 }
    );
  }
}

// PATCH - Update enquiry status
export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry ID" },
        { status: 400 }
      );
    }

    const body = await request.json();
    const { status } = body;

    if (!["new", "contacted", "converted", "closed"].includes(status)) {
      return NextResponse.json(
        { success: false, message: "Invalid status value" },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!enquiry) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: enquiry,
      message: "Status updated successfully",
    });
  } catch (error) {
    console.error("Update enquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update enquiry" },
      { status: 500 }
    );
  }
}

// DELETE - Delete enquiry
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const { id } = await context.params;

    await connectDB();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry ID" },
        { status: 400 }
      );
    }

    const enquiry = await Enquiry.findByIdAndDelete(id);

    if (!enquiry) {
      return NextResponse.json(
        { success: false, message: "Enquiry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry deleted successfully",
    });
  } catch (error) {
    console.error("Delete enquiry error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to delete enquiry" },
      { status: 500 }
    );
  }
}
