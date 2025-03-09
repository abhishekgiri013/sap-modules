import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import SapModule from "@/models/SapModule";

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json(); // Extract JSON body
    const { title, description, features, subModules, pdfLinks, imageUrl } = body;

    if (!title || !description) {
      return NextResponse.json({ success: false, message: "Title and description are required!" }, { status: 400 });
    }

    const newModule = new SapModule({
      title,
      description,
      features: features || [],
      subModules: subModules || [],
      pdfLinks: pdfLinks || [],
      imageUrl: imageUrl || "",
    });

    await newModule.save();
    return NextResponse.json({ success: true, data: newModule }, { status: 201 });
  } catch (error) {
    console.error("POST API Error:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
