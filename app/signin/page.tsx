"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useContext } from "react"
import { AuthContext } from "@/context/AuthContext"
import { redirect } from "next/navigation"

export default function Signin() {

  // If the user is logged in, redirect them to the agents page
  const { loggedIn, setLoggedIn } = useContext(AuthContext)
  if (loggedIn) {
    redirect("/dashboard/agents")
  }

  const handleLoginClick = () => {
    setLoggedIn(true)
  }

  return (
    <>
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          {/* User Avatar */}
          <Avatar>
            <AvatarImage
              className=" w-7"
              src="/images/user-round-fill.svg"
              alt="user"
            />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>

          {/* Sign in with Google */}
          <Button className="mt-6 bg-blue-800 hover:bg-blue-700" asChild>
            <Link
              href="/dashboard/agents"
              onClick={() => {
                handleLoginClick()
              }}
            >
              Sign in with Google
            </Link>
          </Button>
        </div>
      </main>
    </>
  )
}
