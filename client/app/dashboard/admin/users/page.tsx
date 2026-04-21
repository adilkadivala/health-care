/* eslint-disable react/no-unescaped-entities */
"use client"

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { IconBan, IconDotsVertical, IconFilter, IconLock, IconPlus, IconSearch, IconUserCheck, IconTrash } from "@tabler/icons-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
import { api } from "@/lib/http"
import { toast } from "sonner"

type AdminUsersResponse = {
  users: Array<{ id: string; email: string; role: string; firstName: string; lastName: string; accountStatus: "ACTIVE" | "DEACTIVATED" | "BLOCKED" }>
}

export default function Users() {
  const [users, setUsers] = useState<AdminUsersResponse["users"]>([])
  const [search, setSearch] = useState("")
  const [changingId, setChangingId] = useState<string | null>(null)
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null)
  const [statusDraft, setStatusDraft] = useState<"ACTIVE" | "DEACTIVATED" | "BLOCKED">("ACTIVE")

  const loadUsers = async () => {
    try {
      const data = await api.get<AdminUsersResponse>("/admin/users")
      setUsers(data.users)
    } catch {
      setUsers([])
    }
  }
  useEffect(() => {
    void loadUsers()
  }, [])
  const filteredUsers = users.filter((user) =>
    `${user.firstName} ${user.lastName} ${user.email} ${user.role}`.toLowerCase().includes(search.toLowerCase()),
  )
  const handleRoleChange = async (id: string, role: string) => {
    try {
      setChangingId(id)
      await api.patch(`/admin/users/${id}/role`, { role })
      await loadUsers()
      toast.success("User role updated successfully.")
    } catch {
      toast.error("Failed to update user role.")
    } finally {
      setChangingId(null)
    }
  }
  const selectedUser = users.find((u) => u.id === selectedUserId) ?? null
  const handleStatusUpdate = async () => {
    if (!selectedUserId) return
    try {
      setChangingId(selectedUserId)
      await api.patch(`/admin/users/${selectedUserId}/status`, { status: statusDraft })
      await loadUsers()
      toast.success("User status updated.")
    } catch {
      toast.error("Failed to update user status.")
    } finally {
      setChangingId(null)
      setSelectedUserId(null)
    }
  }
  const handleDelete = async () => {
    if (!selectedUserId) return
    try {
      setChangingId(selectedUserId)
      await api.delete(`/admin/users/${selectedUserId}`)
      await loadUsers()
      toast.success("User deleted successfully.")
    } catch (error) {
      const message = error instanceof Error ? error.message : "Failed to delete user."
      toast.error(message)
    } finally {
      setChangingId(null)
      setSelectedUserId(null)
    }
  }
  const statusUi = (status: "ACTIVE" | "DEACTIVATED" | "BLOCKED") => {
    if (status === "BLOCKED") {
      return { label: "Blocked", className: "bg-red-500/15 text-red-700 hover:bg-red-500/25 border-red-200 dark:text-red-400 dark:border-red-900", icon: <IconLock className="size-3.5" /> }
    }
    if (status === "DEACTIVATED") {
      return { label: "Deactivated", className: "bg-amber-500/15 text-amber-700 hover:bg-amber-500/25 border-amber-200 dark:text-amber-300 dark:border-amber-900", icon: <IconBan className="size-3.5" /> }
    }
    return { label: "Active", className: "bg-green-500/15 text-green-700 hover:bg-green-500/25 border-green-200 dark:text-green-400 dark:border-green-900", icon: <IconUserCheck className="size-3.5" /> }
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Staff & Users</h2>
          <p className="text-muted-foreground">
            Manage your hospital staff members and user accounts here.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <IconPlus className="mr-2 h-4 w-4" /> Add User
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New User</DialogTitle>
                <DialogDescription>
                  Create a new staff or user account here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Dr. Sarah Jenkins" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="sarah@hospital.org" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="role">Role</Label>
                    <Select>
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="doctor">Doctor</SelectItem>
                        <SelectItem value="nurse">Nurse</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                        <SelectItem value="pharmacist">Pharmacist</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger id="department">
                        <SelectValue placeholder="Select dept" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cardiology">Cardiology</SelectItem>
                        <SelectItem value="pediatrics">Pediatrics</SelectItem>
                        <SelectItem value="neurology">Neurology</SelectItem>
                        <SelectItem value="it">IT</SelectItem>
                        <SelectItem value="pharmacy">Pharmacy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle>All Users</CardTitle>
            <CardDescription>
              A total of 124 users are currently registered.
            </CardDescription>
          </div>
          <div className="flex space-x-2">
            <div className="relative">
              <IconSearch className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search users..." className="pl-8 w-[250px]" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <Button variant="outline" size="icon">
              <IconFilter className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="flex items-center space-x-3">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={`https://ui-avatars.com/api/?name=${encodeURIComponent(`${user.firstName} ${user.lastName}`)}`} alt={user.email} />
                      <AvatarFallback>{user.firstName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <span className="font-medium">{`${user.firstName} ${user.lastName}`}</span>
                      <span className="text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>
                    <Badge variant="default" className={`gap-1 ${statusUi(user.accountStatus).className}`}>
                      {statusUi(user.accountStatus).icon}
                      {statusUi(user.accountStatus).label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Select defaultValue={user.role} onValueChange={(value) => void handleRoleChange(user.id, value)}>
                        <SelectTrigger className="h-8 w-[140px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ADMIN">Admin</SelectItem>
                          <SelectItem value="DOCTOR">Doctor</SelectItem>
                          <SelectItem value="PATIENT">Patient</SelectItem>
                          <SelectItem value="RECEPTIONIST">Receptionist</SelectItem>
                          <SelectItem value="PHARMACIST">Pharmacist</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        disabled={changingId === user.id}
                        onClick={() => {
                          setSelectedUserId(user.id)
                          setStatusDraft(user.accountStatus)
                        }}
                      >
                        <IconDotsVertical className="h-4 w-4" />
                        <span className="sr-only">Actions</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={Boolean(selectedUser)} onOpenChange={(open) => !open && setSelectedUserId(null)}>
        <DialogContent className="sm:max-w-[430px]">
          <DialogHeader>
            <DialogTitle>User Actions</DialogTitle>
            <DialogDescription>
              Update user status or permanently delete this account.
            </DialogDescription>
          </DialogHeader>
          {selectedUser ? (
            <div className="grid gap-4">
              <div className="rounded-md border p-3">
                <p className="font-medium">{selectedUser.firstName} {selectedUser.lastName}</p>
                <p className="text-xs text-muted-foreground">{selectedUser.email}</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="status">Account Status</Label>
                <Select value={statusDraft} onValueChange={(value: "ACTIVE" | "DEACTIVATED" | "BLOCKED") => setStatusDraft(value)}>
                  <SelectTrigger id="status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ACTIVE">Active</SelectItem>
                    <SelectItem value="DEACTIVATED">Deactive</SelectItem>
                    <SelectItem value="BLOCKED">Blocked</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ) : null}
          <DialogFooter className="flex-row justify-between sm:justify-between">
            <Button variant="destructive" onClick={() => void handleDelete()} disabled={!selectedUser || changingId === selectedUser.id}>
              <IconTrash className="mr-2 h-4 w-4" />
              Delete User
            </Button>
            <Button onClick={() => void handleStatusUpdate()} disabled={!selectedUser || changingId === selectedUser.id}>
              Save Status
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}