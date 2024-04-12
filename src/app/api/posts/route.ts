import { connect } from "@/dbConfig/dbConfig";
import Post from "@/app/model/postModel";
import { NextRequest, NextResponse } from "next/server";

connect()

export async function GET() {
    try {
        const posts = await Post.find({}).sort({_id: -1}) ;

         return NextResponse.json({
            posts: posts,
        })
    } catch (error) {
        console.log(error)
    }
}