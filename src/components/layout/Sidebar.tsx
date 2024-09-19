'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Car } from 'lucide-react'
import NavigationMenu from './NavigationMenu'

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`relative min-h-screen border-r-[1px] transition-all duration-300 ease-in-out ${collapsed ? 'w-[50px]' : 'w-[200px]'}`}>
      <SidebarContent collapsed={collapsed} />
      <Button className="absolute -right-5 bottom-1/4 rounded-[50%]" onClick={() => setCollapsed(!collapsed)}>
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  )
}

function SidebarContent({ collapsed }: { collapsed: boolean }) {
  return (
    <div>
      <div className="border-b-[1px] py-5">
        <Link className="flex items-center justify-center" href="/">
          <Car className="h-6 w-6" />
          <span className={`ml-2 text-lg font-bold ${collapsed && 'hidden'}`}>CarRent</span>
        </Link>
      </div>
      <div className="py-5">
        <NavigationMenu collapsed={collapsed} />
      </div>
    </div>
  )
}
