import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { IconDownload, IconSearch } from "@tabler/icons-react"

const auditLogs = [
  {
    id: "AL-1001",
    timestamp: "2026-04-11 10:45:22",
    user: "Admin",
    event: "Access Granted",
    resource: "/api/users/add",
    ip: "192.168.1.45",
    status: "Success",
  },
  {
    id: "AL-1002",
    timestamp: "2026-04-11 10:42:15",
    user: "System",
    event: "Data Sync",
    resource: "Patient Database",
    ip: "10.0.0.1",
    status: "Success",
  },
  {
    id: "AL-1003",
    timestamp: "2026-04-11 09:15:00",
    user: "Dr. Sarah Jenkins",
    event: "Record Modified",
    resource: "Patient ID #88219",
    ip: "192.168.1.102",
    status: "Success",
  },
  {
    id: "AL-1004",
    timestamp: "2026-04-10 23:59:59",
    user: "Unknown",
    event: "Failed Login",
    resource: "/auth/login",
    ip: "45.22.19.11",
    status: "Failed",
  },
  {
    id: "AL-1005",
    timestamp: "2026-04-10 18:30:45",
    user: "James Wilson",
    event: "Settings Updated",
    resource: "System Config",
    ip: "192.168.1.45",
    status: "Success",
  },
]

export default function Audit() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Audit Logs</h2>
          <p className="text-muted-foreground">
            Review security and compliance audit records.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <IconDownload className="mr-2 h-4 w-4" /> Export CSV
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>Security Logs</CardTitle>
            <CardDescription>
              A permanent, immutable record of all system events.
            </CardDescription>
          </div>
          <div className="flex space-x-2">
             <div className="relative">
              <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search event or IP..." className="pl-8 w-[250px]" />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Log ID</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>User / Principal</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Resource</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">{log.id}</TableCell>
                  <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="font-medium">{log.event}</TableCell>
                  <TableCell className="text-muted-foreground">{log.resource}</TableCell>
                  <TableCell className="font-mono text-xs">{log.ip}</TableCell>
                  <TableCell>
                    <Badge variant={log.status === 'Success' ? 'default' : 'destructive'}
                           className={log.status === 'Success' ? 'bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200 dark:text-green-400 dark:border-green-900' : ''}
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}