import { Calendar, Car, LayoutGridIcon, SettingsIcon, UsersIcon } from 'lucide-react'
import React from 'react'
import DashboardNavigationLink from './NavigationMenuLink'

export interface Navigation {
  href: string
  title: string
  icon?: React.ReactNode
}

export default function NavigationMenu({ collapsed }: { collapsed: boolean }) {
  const navigations: Navigation[] = [
    {
      title: 'Dashboard',
      href: '/admin',
      icon: <LayoutGridIcon className="h-5 w-5" />
    },
    {
      title: 'Bookings',
      href: '/booking',
      icon: <Calendar className="h-5 w-5" />
    },
    {
      title: 'Cars',
      href: '/car',
      icon: <Car className="h-5 w-5" />
    },
    {
      title: 'Customers',
      href: '/customer',
      icon: <UsersIcon className="h-5 w-5" />
    },
    {
      title: 'Settings',
      href: '/setting',
      icon: <SettingsIcon className="h-5 w-5" />
    }
  ]

  return (
    <nav>
      {navigations.map((navigation) => {
        return (
          <div key={navigation.href}>
            <DashboardNavigationLink navigation={navigation} collapsed={collapsed} />
          </div>
        )
      })}
    </nav>
  )
}
