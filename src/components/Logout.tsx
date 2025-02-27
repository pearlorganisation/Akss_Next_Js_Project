import { getKindeServerSession, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server"
 
 import { redirect } from "next/navigation"
export default async function Logout() {
 const { isAuthenticated } = getKindeServerSession()
 const isLoggedIn = await isAuthenticated()
//   if(isLoggedIn){
//    redirect('/admin')
//   }
    return(
        <>
          {isLoggedIn && <LogoutLink>Log out</LogoutLink>}
        </>
    )
}