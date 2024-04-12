
import { connect } from "@/dbConfig/dbConfig";
import User from "@/app/model/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from 'bcryptjs'

connect()

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody
        
        const user = await User.findOne({email})

        // check if user already existed 
        if (user) {
            return NextResponse.json({error:"User already exists"},{status:400})
        }

        // hash password
        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashpassword
        })

        // save user to database
        const savedUser = await newUser.save();
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
    }
    catch (error)
    {
        console.log(error)
    }
}


