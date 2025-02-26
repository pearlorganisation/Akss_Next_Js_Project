"use server"

import { revalidatePath } from "next/cache"
import { connectToDatabase } from ".."
import Challenge from "../Models/Challenges"

export interface Challenge{
    title: string,
    description: string,
    solution: string
}


export const createChallenge = async(challenge: Challenge)=>{

    try {
        await connectToDatabase()
        const data = await Challenge.create(challenge)
        // revalidatePath(path)   will send once i start sending 
        return JSON.parse(JSON.stringify(data))

    } catch (error) {
        return error
    }
}