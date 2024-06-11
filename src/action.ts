"use server";
import { sessionOptions, SessionData, defaultSession } from "@/lib";
import { getIronSession } from "iron-session";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const username = "SanikaGhugare";
const isPro = true;

export const getSession = async () => {
    const session = await getIronSession<SessionData>(cookies(), sessionOptions);

    if (!session.isLoggedIn) {
        session.isLoggedIn = defaultSession.isLoggedIn;
    } 
    return session;
};

export const login = async (formData: FormData) => {
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
    //session.isLoggedIn = true;

    await session.save();
    redirect("/");
};
export const logout = async () =>{} 