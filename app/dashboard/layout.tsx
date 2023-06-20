import Sider, { siderRoutes } from "./sider"

const routes: siderRoutes = [
  { path: "/dashboard/agents", name: "Agents" },
  { path: "/dashboard/settings", name: "Settings" },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className=" min-h-screen flex">
      {/* sider */}
      <Sider routes={routes} />

      {/* main */}
      <section className="p-4 flex-1">{children}</section>
    </main>
  )
}
