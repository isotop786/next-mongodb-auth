import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/model/userModel";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
import { getDataFromToken } from "../../../../../helper/getDataFromToken";

connect()

export async function GET(request: NextRequest) {
    
    try {
        const userId = await getDataFromToken(request);

        const user = await User.findOne({ _id: userId }).select("-password");
        return NextResponse.json({
            message: "User found",
            data: user
        })
    }
    catch (error: any) {
        return NextResponse.json({error:error.message}, {status: 400})
    }
}