"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import GetTokenComponent from "@/components/GetTokenComponent";
import Link from "next/link";
export default function UserInfo(){
    const { user, error, isLoading } = useUser();
    return (
        <div>
            <h1>Hello {user ? user.nickname : ""}</h1>
            {user ? (
                <div>
                    <h2>{user.nickname}</h2>
                    <a href="/api/auth/logout">logout</a>
                    <Link href={"/tokenInPage"}>get token</Link>
                </div>
            ) : (
                <a href="/api/auth/login">Login</a>
            )}
        </div>
    )
}