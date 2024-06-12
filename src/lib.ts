import { SessionOptions } from "iron-session";

export interface SessionData {
    userID?: string;
    username?: string;
    img?: string;
    isPro?: boolean;
    isBlocked?:boolean
    isLoggedIn:boolean
}

export const defaultSession : SessionData = {
    isLoggedIn:false
}
if (!process.env.SECRET_KEY) {
    throw new Error("SECRET_KEY environment variable is not defined");
}

export const sessionOptions: SessionOptions = {
    password: process.env.SECRET_KEY,
    cookieName: "Creation",
    cookieOptions: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    }
};
