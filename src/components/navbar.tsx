import Link from "next/link"
import LogoutForm from "./logoutFrom"
import { getSession } from "@/action"
const Navbar = async () =>{
    const session = await getSession()
    
    return (
        <nav>
            <Link href="/">Homepage</Link>
            <Link href="/premium">Premium</Link>
            <Link href="/profile">Profile</Link>
            <Link href="/login">Login</Link>
            {session.isLoggedIn && <LogoutForm />}
        </nav>
    )
}

export default Navbar