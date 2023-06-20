import Image from "next/image"
import RootLayout from "../layout"
import { Button } from "@/components/ui/button"

export default function Signin() {
  return (
    <RootLayout>
      <main className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center">
          <Image
            src="/images/user-round-fill.svg"
            alt="user"
            width={60}
            height={60}
          />
          <Button className="mt-6 bg-blue-700 hover:bg-blue-600">Sign in with Google</Button>
        </div>
      </main>
    </RootLayout>
  )
}
