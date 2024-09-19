'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Navigation } from './NavigationMenu'

interface Props {
  navigation: Navigation
  collapsed: boolean
}

export default function DashboardNavigationLink({ navigation, collapsed }: Props) {
  const pathname = usePathname()

  const isActive = () => {
    if (pathname === navigation.href) return true
    if (pathname === '/' && navigation.href === '/') return true
    return pathname.startsWith(navigation.href) && navigation.href !== '/'
  }

  return (
    <Link
      href={navigation.href}
      className={`flex gap-2 py-5 transition-all duration-300 ease-in-out ${collapsed ? 'justify-center' : 'px-5'} ${isActive() ? 'border-r-4 border-primary/80 bg-primary/20' : 'text-muted-foreground hover:border-r-4 hover:border-primary/50 hover:text-foreground'} `}
      prefetch={false}
    >
      {navigation.icon}
      <span className={`transition-all duration-300 ease-in-out ${collapsed && 'hidden'}`}>{navigation.title}</span>
    </Link>
  )
}
