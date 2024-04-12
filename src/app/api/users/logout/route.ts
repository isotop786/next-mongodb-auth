import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/model/userModel";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    try {
        const response = NextResponse.json(
            {
                message: "Logout successful",
                success: true,
            }
        )
        response.cookies.set("token", "",
        { httpOnly: true, expires: new Date(0)
        })

        return response;
        
    } catch (error : any) {
        return NextResponse.json({ error: error.message},
            {status: 500});
    }
}