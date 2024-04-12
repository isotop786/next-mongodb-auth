import { connect } from "@/dbConfig/dbConfig";
import Post from "@/app/model/postModel";
import { NextResponse,NextRequest } from "next/server";


connect();

export async function POST(request: NextRequest)
{
    try {
        const reqBody = await request.json();    
        const { email, password } = reqBody;

         const post = await Post.create(reqBody);
        
        const response = NextResponse.json({
            message: "post created successful",

            success: true,
        })

        return response;


    } catch (error) {
        console.log(error)
    }
}

