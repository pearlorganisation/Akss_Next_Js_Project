"use server"

import { revalidatePath } from "next/cache"
import { connectToDatabase } from ".."
import Challenge from "../Models/Challenges"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { NextResponse } from "next/server"
import { error } from "console"
import axios from "axios"

export interface Challenge{
    title: string,
    description: string,
    solution: string
}


export const createChallenge = async(challenge: Challenge)=>{

    try {
        const {isAuthenticated, getUser, getRoles} = getKindeServerSession()
        const user = await getRoles()
        console.log("the user details are", user )
        if(user && user[0] && user[0].name === 'ADMIN'){
        await connectToDatabase()
        const data = await Challenge.create(challenge)
        // revalidatePath(path)   will send once i start sending 
        return JSON.parse(JSON.stringify(data))
    }else{
        return NextResponse.json({ error: "User is not authenticated"},{status: 400})
    }
    

    } catch (error) {
        return error
    }
}

export const getAllTheChallenges = async()=>{
    try {
        const { getRoles } = getKindeServerSession()
        const user = await getRoles();

        if(user && user[0] && user[0].name==="ADMIN"){
            await connectToDatabase()
            const data = await Challenge.find();
            const res = JSON.parse(JSON.stringify(data));

            if(res.length == 0){
                return NextResponse.json({message:"No Data is Available"}, {status:404})
            }
            return NextResponse.json({message:"data is fetched",data:res},{status:201})
        }
    } catch (error) {
        return error
    }
}