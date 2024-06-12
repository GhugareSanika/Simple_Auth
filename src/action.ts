"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

let username = "SanikaGhugare";
let isPro = true;
let isBlocked = true;

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    } 

    //Check the user in the Database
    session.isBlocked = isBlocked;
    session.isPro = isPro;
    return session;
}; 

export const login = async (
    prevState: {error:undefined | string},
    formData: FormData) => {
    const session = await getSession();
    const formUsername = formData.get("username") as string;
    const formPassword = formData.get("password") as string;

    // Check user in the database
    // const user = await 

    if (formUsername !== username) {
        return { error: "Wrong Credentials" };  
    }

    session.userID = "1";
    session.username = formUsername;
    session.isPro = isPro;
    session.isLoggedIn = true;

    await session.save();
    redirect("/");
};

export const logout = async () =>{
    const session = await getSession();
    session.destroy();
    redirect("/");
} 

export const changePremium = async () =>{
    const session = await getSession()

    isPro = !session.isPro
    session.isPro = isPro
    await session.save()
    revalidatePath("/profile")
}

export const changeUsername = async (formData : FormData) =>{
    const session = await getSession()

    const NewUsername = formData.get("username") as string

    username = NewUsername;

    session.username = username;
    await session.save()
    revalidatePath("/profile")
}