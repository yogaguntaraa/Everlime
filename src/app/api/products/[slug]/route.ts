import Product from "@/db/models/Product";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
  const slug = request.nextUrl.pathname.split("/").pop();
  try {
    const product = await Product.findBySlug(slug!);
    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    if ((error as Error).name === "BSONError") {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}