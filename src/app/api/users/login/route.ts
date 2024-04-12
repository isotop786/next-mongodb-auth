import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/model/userModel";
import { NextResponse,NextRequest } from "next/server";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest)
{
    try {
        const reqBody = await request.json();    
        const { email, password } = reqBody;

        // check if user exists
        const user = await User.findOne({email})

        if (!user) {
            return NextResponse.json({error: "User does not exist"},{status:400})
        }

        // check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);
        if (!validPassword) {
            return NextResponse.json({error:"Invalid password"}, {status:400})
        }

        // create a token with expiration of 1 day
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!,{expiresIn:"1d"})

        // returning JSON response with jwt for mobile app
        const response = NextResponse.json({
            message: "Log in successful",
            token: token,
            success: true,
        })

        // setting HTTP-only cookie
        response.cookies.set("token", token, {
            httpOnly:true
        })

        return response;


    } catch (error) {
        console.log(error)
    }
}

