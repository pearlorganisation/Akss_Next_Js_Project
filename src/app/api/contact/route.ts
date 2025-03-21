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
            return NextResponse.json({message:"Contact Submitted successfully", data:data},{ status: 201})
        } catch (error) {
            console.log("the error is", error)
            return NextResponse.json({error:"Something went wrong"},{status:400})
        }
    }
}


export async function GET(req: NextRequest) {
  try {
    await connectToDatabase();

    // Get query parameters for pagination
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "1", 10);

    console.log("the  limit is", limit)
    const skip = (page - 1) * limit;

    const data = await Contact.find().skip(skip).limit(limit);
    const totalContacts = await Contact.countDocuments();

    return NextResponse.json(
      {
        message: "Messages found successfully",
        data:data,
        totalContacts,
        currentPage: page,
        totalPages: Math.ceil(totalContacts / limit),
        limit:limit
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}


export async function DELETE(req:NextRequest) {
  try {
    await connectToDatabase()
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id")
    if(id !== undefined){
      const data = await Contact.findByIdAndDelete(id)
      if(data){
        return NextResponse.json({message:"Deleted Successfully"}, {status:201})
      }
      return NextResponse.json({message:"Server error"},{status:400})
    }
  } catch (error) {
    return NextResponse.json({message:"Failed to delete"},{status:401})
  }
}