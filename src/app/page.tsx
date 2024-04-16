"use client"
import Image from "next/image";
import {useUser} from "@auth0/nextjs-auth0/client";
export default function Home() {
    const { user, error, isLoading } = useUser();

    if(user) console.log(user)
  return (
      <main>
          <h1>Hello</h1>
          {user ? <div
              >
              <h2>{user.nickname}</h2>
                  <a href="/api/auth/logout">logout</a>
              </div>
              :
              <a href="/api/auth/login">Login</a>
          }

      </main>
  );
}
