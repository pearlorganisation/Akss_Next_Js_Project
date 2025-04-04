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

export const getAllTheChallenges = async () => {
    try {
        const { getRoles } = getKindeServerSession();
        const user = await getRoles();

        if (user && user[0] && user[0].name === "ADMIN") {
            await connectToDatabase();
            const data = await Challenge.find();
            const res = JSON.parse(JSON.stringify(data));  
            

            if (res.length === 0) {
                return { message: "No Data is Available", status: 404 };  
            }

            return { message: "Data fetched", data: res, status: 200 }; 
        }

        return { message: "Unauthorized", status: 403 }; 
    } catch (error) {
        return { error: (error as Error).message, status: 500 };  
    }
};

export const deleteChallenge = async (id: string) => {
  try {
    console.log("Attempting to delete challenge with ID:", id);
    const { getRoles } = getKindeServerSession();
    const userRoles = await getRoles();

    if (userRoles && userRoles[0]?.name === "ADMIN") {
      await connectToDatabase();
      const deletedChallenge = await Challenge.findByIdAndDelete(id);

      if (!deletedChallenge) {
        console.log("No data found for deletion");
        return { message: "No Data Available", status: 404 };
      }

      console.log("Challenge deleted successfully, revalidating...");
      revalidatePath("/admin"); // ✅ This should clear cache
      return { message: "Successfully Deleted", status: 200 };
    }

    console.log("Unauthorized attempt to delete challenge");
    return { message: "Unauthorized", status: 403 };
  } catch (error) {
    console.error("Error deleting challenge:", error);
    return { message: "Server Error", status: 500, error };
  }
};
