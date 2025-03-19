"use server"

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const isUserAdmin=async()=>{
    try {
        const { getRoles } = getKindeServerSession()
        const user = await getRoles()
        console.log("the user is",user)
        return user
    } catch (error) {
        return error
    }
}