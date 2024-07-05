import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/lib/db";
import UserModel from "@/models/user";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, secondName, email, password } = body;

    console.log("body", body);

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    await connect();

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 409 }
      );
    }

    const newUser = new UserModel({
      name,
      secondName,
      email,
      password,
    });

    await newUser.save();

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
}
