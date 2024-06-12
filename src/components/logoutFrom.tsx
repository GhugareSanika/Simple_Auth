import { logout } from "@/action"
import { useFormState } from "react-dom"

const LogoutForm = () =>{
    return (
        <form action={logout}>
            <button>Logout</button>
        </form>
    )
}

export default LogoutForm 