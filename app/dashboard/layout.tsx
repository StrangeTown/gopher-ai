"use client"

import { useContext } from "react"
import Sider, { siderRoutes } from "./sider"
import { AuthContext } from "@/context/AuthContext"
import { redirect } from "next/navigation"

const routes: siderRoutes = [
  { path: "/dashboard/agents", name: "Agents" },
  { path: "/dashboard/settings", name: "Settings" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  // If the user is not logged in, redirect them to the signin page
  const { loggedIn } = useContext(AuthContext)
  if (!loggedIn) {
    redirect("/signin")
  }

  return (
    <main className=" min-h-screen flex">
      {/* sider */}
      <Sider routes={routes} />

      {/* main */}
      <section className="p-4 flex-1">{children}</section>
    </main>
  )
}
