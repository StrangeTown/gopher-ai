import RootLayout from "../layout"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Signin() {
  return (
    <RootLayout>
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          {/* User Avatar */}
          <Avatar>
            <AvatarImage
              className=" w-7"
              src="/images/user-round-fill.svg"
              alt="user"
            />
            <AvatarFallback>user</AvatarFallback>
          </Avatar>

          {/* Sign in with Google */}
          <Button className="mt-6 bg-blue-800 hover:bg-blue-700" asChild>
            <Link href="/dashboard/agents">Sign in with Google</Link>
          </Button>
        </div>
      </main>
    </RootLayout>
  )
}
