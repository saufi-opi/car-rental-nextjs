'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type Navigation } from './NavigationMenu'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'

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

  if (collapsed) {
    return (
      <TooltipProvider delayDuration={70}>
        <Tooltip>
          <TooltipTrigger className="w-full">
            <Link
              href={navigation.href}
              className={`flex py-3 pl-2 transition-all duration-300 ease-in-out ${isActive() ? 'border-r-4 border-primary/80 bg-primary/20' : 'text-muted-foreground hover:border-r-4 hover:border-primary/50 hover:text-foreground'} `}
              prefetch={false}
            >
              {navigation.icon}
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left" className="px-3 py-1.5 text-xs" sideOffset={10}>
            <span>{navigation.title}</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <Link
      href={navigation.href}
      className={`flex py-3 pl-2 transition-all duration-300 ease-in-out ${isActive() ? 'border-r-4 border-primary/80 bg-primary/20' : 'text-muted-foreground hover:border-r-4 hover:border-primary/50 hover:text-foreground'} `}
      prefetch={false}
    >
      <div className="flex items-center gap-2">
        {navigation.icon}
        <span className={`transition-all duration-300 ease-in-out`}>{navigation.title}</span>
      </div>
    </Link>
  )
}
