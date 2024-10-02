'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { NavItems } from './config'
import { Car, ChevronDown, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Header() {
  const navItems = NavItems()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between border-b bg-background px-4 shadow-sm md:px-6">
      <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
        <Car />
        <span>AppName</span>
      </Link>
      <div className="ml-4 flex items-center gap-3">
        <DropdownMenu>
          <div className="flex items-center gap-1 text-xs">
            <span className="hidden md:block">Welcome!</span>
            <span className="italic">Ahmad Saufi</span>
          </div>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <ChevronDown size={20} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href="/admin/settings">
              <DropdownMenuItem className="cursor-pointer">Settings</DropdownMenuItem>
            </Link>
            <Link href="/admin/settings/forgot-password">
              <DropdownMenuItem className="cursor-pointer">Change Password</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer text-destructive">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="block sm:hidden">
          <Menu size={24} />
        </Button>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="block md:hidden">
            <div className="flex h-fit w-full flex-col gap-1 overflow-y-auto pt-4">
              {navItems.map((navItem, idx) => (
                <Link
                  key={idx}
                  href={navItem.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'relative flex h-full items-center whitespace-nowrap rounded-md',
                    navItem.active
                      ? 'bg-primary/10 font-medium text-primary shadow-sm'
                      : 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
                  )}
                >
                  <div className="relative flex flex-row items-center space-x-2 rounded-md px-2 py-1.5 text-sm duration-100">
                    {navItem.icon}
                    <span>{navItem.name}</span>
                  </div>
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
