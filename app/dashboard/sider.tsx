"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface route {
  path: string
  name: string
}
export type siderRoutes = route[]
interface SiderProps {
  routes: siderRoutes
}
export default function Sider({ routes }: SiderProps) {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col w-60 p-4 border-r">
      {/* App Logo */}
      <div className=" text-center font-bold text-2xl mb-10">
        Gopher AI
      </div>

      {/* Sider Links */}
      {routes.map((route) => (
        <Button
          variant={"link"}
          key={route.path}
          className={
            pathname === route.path
              ? "text-blue-800 hover:text-blue-700"
              : "text-gray-800 hover:text-gray-700"
          }
        >
          <Link href={route.path}>{route.name}</Link>
        </Button>
      ))}
    </aside>
  )
}
