import { connectToDatabase } from "@/lib/Database";
import { NextRequest, NextResponse } from "next/server"
import axios from "axios"
import Contact from "@/lib/Database/Models/Contact";
export async function POST(req: NextRequest) {
    const { name, email, company, message } = await req.json();
    console.log("the body is", name, email, company, message)
     if(!name || !email || !company || !message){
     return NextResponse.json({ error: 'Please Send All the Inputs' }, { status: 400 });
    }else{
        try {
            await connectToDatabase()
            const data = await Contact.create({name, email, company,message})
            return NextResponse.json({message:"Contact Submitted successfully"},{ status: 201})
        } catch (error) {
            console.log("the error is", error)
            return NextResponse.json({error:"Something went wrong"},{status:400})
        }
    }
}