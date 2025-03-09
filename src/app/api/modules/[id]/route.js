import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SapModule from "@/models/SapModule";

// Get a single module by ID
export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params; // Extract module ID from params

    const module = await SapModule.findById(id);

    if (!module) {
      return NextResponse.json({ success: false, message: "Module not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: module }, { status: 200 });
  } catch (error) {
    console.error("Error fetching module:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
