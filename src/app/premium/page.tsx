import { getSession } from "@/action"
import { redirect } from "next/navigation"
import Link from "next/link"


const PremiumPage = async () =>{

  const session = await getSession()

  if(!session.isLoggedIn){
    redirect("/")
  }

  if(!session.isPro){
    return(
      <div className="notPremium">
        <h1>Only Premium user can see the content !!</h1>
        <Link href="/profile">Go to the profile page to upgrade the premium</Link>
      </div>
    )
  }
    return (
      <div className="premium">
          <h1>Welcome to premium</h1>
      </div>
    )
  }
  
  export default PremiumPage