"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IconLogout, type Icon } from "@tabler/icons-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { useAuth } from "@/lib/auth-context"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: Icon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname()
  const { logout } = useAuth()
  const isActiveItem = (url: string) =>
    pathname === url || pathname.startsWith(`${url}/`)

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton
                tooltip={item.title}
                isActive={isActiveItem(item.url)}
                className="text-sidebar-foreground data-[active=true]:text-primary!"
                asChild
              >
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          ))}
        </SidebarMenu>
        </SidebarGroupContent>
        <SidebarGroupContent>

        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip="Logout"
            className="data-[active=true]:text-primary! text-red-600"
          >
            <span className="cursor-pointer text-red-600 flex items-center gap-2 text-sm" onClick={logout}>
              <IconLogout /> Logout 
              </span>  
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
