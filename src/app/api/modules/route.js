import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SapModule from "@/models/SapModule";

// Get all SAP modules
export async function GET(req) {
  try {
    await connectDB();
    
    // Extract query parameters
    const { searchParams } = new URL(req.url);
    const moduleType = searchParams.get("type");

    let query = {};
    if (moduleType) {
      query = { type: moduleType }; // Filter by type if provided
    }

    const modules = await SapModule.find(query);

    return NextResponse.json({ success: true, data: modules || [] }, { status: 200 });
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
