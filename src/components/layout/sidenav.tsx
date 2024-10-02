'use client'

import { Fragment, useState } from 'react'
import Link from 'next/link'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { NavItems } from './config'
import { cn } from '@/lib/utils'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function SideNav() {
  const navItems = NavItems()
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true)

  const toggleSidebar = () => setIsSidebarExpanded(!isSidebarExpanded)

  return (
    <div className="pr-4">
      <div
        className={cn(
          isSidebarExpanded ? 'w-[200px]' : 'w-[68px]',
          'hidden h-full transform border-r bg-background shadow-md transition-all duration-300 ease-in-out sm:flex'
        )}
      >
        <aside className="h-full w-full columns-1 overflow-x-hidden break-words px-4">
          <div className="relative mt-4 pb-2">
            <div className="flex flex-col space-y-2">
              {navItems.map((item, idx) => (
                <Fragment key={idx}>
                  <div className="space-y-1">
                    <SideNavItem
                      label={item.name}
                      icon={item.icon}
                      path={item.href}
                      active={item.active}
                      isSidebarExpanded={isSidebarExpanded}
                    />
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </aside>
        <div className="relative mt-[calc(90vh-40px)]">
          <button
            type="button"
            className="absolute bottom-32 right-[-12px] flex h-6 w-6 items-center justify-center rounded-full border border-border bg-secondary shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg"
            onClick={toggleSidebar}
          >
            {isSidebarExpanded ? (
              <ChevronLeft size={16} className="stroke-background" />
            ) : (
              <ChevronRight size={16} className="stroke-background" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export const SideNavItem: React.FC<{
  label: string
  icon: React.ReactNode
  path: string
  active: boolean
  isSidebarExpanded: boolean
}> = ({ label, icon, path, active, isSidebarExpanded }) => {
  return (
    <>
      {isSidebarExpanded ? (
        <Link
          href={path}
          className={cn(
            'relative flex h-full items-center whitespace-nowrap rounded-md',
            active
              ? 'bg-primary/10 font-medium text-primary shadow-sm'
              : 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
          )}
        >
          <div className="relative flex flex-row items-center space-x-2 rounded-md px-2 py-1.5 text-base duration-100">
            {icon}
            <span>{label}</span>
          </div>
        </Link>
      ) : (
        <TooltipProvider delayDuration={70}>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={path}
                className={cn(
                  'relative flex h-full items-center whitespace-nowrap rounded-md',
                  active
                    ? 'bg-primary/10 font-medium text-primary'
                    : 'text-muted-foreground hover:bg-primary/5 hover:text-foreground'
                )}
              >
                <div className="relative flex flex-row items-center space-x-2 rounded-md p-2 text-base duration-100">
                  {icon}
                </div>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="left" className="px-3 py-1.5 text-xs" sideOffset={10}>
              <span>{label}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </>
  )
}
