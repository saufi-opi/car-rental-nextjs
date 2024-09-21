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
      icon: <LayoutGridIcon className="inline h-6 w-6" />
    },
    {
      title: 'Bookings',
      href: '/booking',
      icon: <Calendar className="inline h-6 w-6" />
    },
    {
      title: 'Cars',
      href: '/car',
      icon: <Car className="inline h-6 w-6" />
    },
    {
      title: 'Customers',
      href: '/customer',
      icon: <UsersIcon className="inline h-6 w-6" />
    },
    {
      title: 'Settings',
      href: '/setting',
      icon: <SettingsIcon className="inline h-6 w-6" />
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
