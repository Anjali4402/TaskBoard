import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log(email, password);

    // If there is not email and password in the payload request.
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    // connect to database
    await mongoose.connect(connectionStr);

    return NextResponse.json({ success: true, data: [] });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
