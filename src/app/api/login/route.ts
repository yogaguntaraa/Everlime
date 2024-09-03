import User from "@/db/models/User";
import { schemaUser } from "@/db/validation/user";
import { comparePassword } from "@/helpers/bcrypt";
import { signToken } from "@/helpers/token";
import { MongoServerError } from "mongodb";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const validateBody = await schemaUser.parseAsync(body);
    const user = await User.findByEmail(validateBody.email);

    if (!user) {
      return NextResponse.json(
        { message: "Account not found" },
        {
          status: 401,
        }
      );
    }

    const validatePass = comparePassword(validateBody.password, user.password)
    if (!validatePass) {
      return NextResponse.json(
        { 
          message: "Invalid Email/Password" 
        },
        {
          status: 400
        }
      )
    }

    const access_token = signToken({ id: String(user._id) });

    return NextResponse.json({ access_token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: error.errors[0].message,
        },
        { status: 400 }
      );
    } else if (error instanceof MongoServerError) {
      if (error.code === 11000)
        return NextResponse.json(
          {
            message: "Email already exist",
          },
          { status: 400 }
        );
    }
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}