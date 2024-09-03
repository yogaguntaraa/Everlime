import Product from "@/db/models/Product";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const query = request.nextUrl.searchParams;
    const search = query.get("search");
    const page = query.get("page");
    console.log(search, page);
    try {
        const product = await Product.findAll(search!, page!);
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            {
                status: 500,
            }
        );
    }
}


























// export async function GET() {
//     try {
//         const products = await Product.findAll();

//         return Response.json(products)
//     } catch (error: any) {
//         let msgError = error.message || "Internal server error"
//         let status = 500
//         return Response.json(
//             {
//                 message: msgError
//             },
//             {
//                 status: status,
//             }
//         )
//     }
// }