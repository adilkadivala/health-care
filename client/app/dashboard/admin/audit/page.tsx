"use client"

import React, { useEffect, useMemo, useState } from 'react'
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

import { api } from "@/lib/http"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Audit() {
  const [logs, setLogs] = useState<Array<{ id: string; category: string; message: string; at: string }>>([])
  const [query, setQuery] = useState("")
  useEffect(() => {
    const load = async () => {
      try {
        const data = await api.get<{ logs: Array<{ id: string; category: string; message: string; at: string }> }>("/admin/audit")
        setLogs(data.logs)
      } catch {
        setLogs([])
      }
    }
    void load()
  }, [])
  const filtered = useMemo(
    () => logs.filter((log) => `${log.id} ${log.category} ${log.message}`.toLowerCase().includes(query.toLowerCase())),
    [logs, query],
  )
  const handleDownload = () => {
    window.open(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api"}/admin/audit/export`, "_blank")
  }
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
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">
                <IconDownload className="mr-2 h-4 w-4" /> Export CSV
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Export Audit Logs</DialogTitle>
                <DialogDescription>
                  Configure your export options before downloading.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="dateRange">Date Range</Label>
                  <Select defaultValue="last7days">
                    <SelectTrigger id="dateRange">
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="today">Today</SelectItem>
                      <SelectItem value="last7days">Last 7 Days</SelectItem>
                      <SelectItem value="last30days">Last 30 Days</SelectItem>
                      <SelectItem value="all">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="format">Format</Label>
                  <Select defaultValue="csv">
                    <SelectTrigger id="format">
                      <SelectValue placeholder="Select format" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="csv">CSV (Spreadsheet)</SelectItem>
                      <SelectItem value="json">JSON (Data)</SelectItem>
                      <SelectItem value="pdf">PDF (Printable report)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" onClick={handleDownload}>Download</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
              <Input placeholder="Search event or IP..." className="pl-8 w-[250px]" value={query} onChange={(e) => setQuery(e.target.value)} />
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
              {filtered.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-mono text-xs">{log.id}</TableCell>
                  <TableCell className="text-muted-foreground">{new Date(log.at).toLocaleString()}</TableCell>
                  <TableCell>{log.category}</TableCell>
                  <TableCell className="font-medium">{log.message}</TableCell>
                  <TableCell className="text-muted-foreground">System</TableCell>
                  <TableCell className="font-mono text-xs">-</TableCell>
                  <TableCell>
                    <Badge variant="default"
                           className='bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200 dark:text-green-400 dark:border-green-900'
                    >
                      Success
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