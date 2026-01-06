import { connectionStr } from "@/lib/db";
import { userModelSchema } from "@/lib/usersModel";
import mongoose from "mongoose";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // const { fullName, email, password } = await request.json();
    const payload = await request.json();
    const { fullName, email, password } = payload;

    // If there is not email and password in the payload request.
    if (!fullName || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    // connect to database
    await mongoose.connect(connectionStr);

    // create new user
    // const user = new userModelSchema(payload);
    const user = new userModelSchema({
      fullName,
      email,
      password,
    });
    const result = await user.save();

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
