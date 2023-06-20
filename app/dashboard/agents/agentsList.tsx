import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Agent } from "@/types"

interface AgentItemProps {
  agents: Agent[]
}

export default function AgentList({ agents }: AgentItemProps) {
  return (
    <>
      <Table className=" mt-12 border-t-gray-200 border-t">
        {/* Table Body */}
        <TableBody>
          {agents.map((agent) => (
            // Table Row
            <TableRow key={agent.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage className=" w-7" src={agent.avatarImageSrc} alt={agent.name} />
                  <AvatarFallback>{agent.name}</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>{agent.name}</TableCell>
              <TableCell>{agent.status}</TableCell>
              <TableCell>
                <Button className="bg-blue-800">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
