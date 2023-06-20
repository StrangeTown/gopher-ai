import { Agent } from "@/types";
import AgentsActions from "./actions";
import AgentsList from "./agentsList";

const agents: Agent[] = [
  {
    id: 'a5e7aad7-b2b8-4e63-9f4a-f2b87f242e4f',
    name: "John Doe",
    status: "Online",
    avatarImageSrc: "/images/user-round-fill.svg",
  },
  {
    id: '9d833202-82e2-42ed-b02c-24a13427d223',
    name: "Orn - Gibson",
    status: "Offline",
    avatarImageSrc: "/images/user-round-fill.svg",
  }
]

export default function Agents() {
  return (
    <>
      <AgentsActions />
      <AgentsList agents={agents} />
    </>
  )
}