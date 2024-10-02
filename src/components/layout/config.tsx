import { usePathname } from 'next/navigation'

import { Car, ClipboardCopy, LayoutDashboard, User2 } from 'lucide-react'

export const NavItems = () => {
  const pathname = usePathname()

  function isNavItemActive(pathname: string, nav: string) {
    return pathname.includes(nav)
  }

  return [
    {
      name: 'Dashboard',
      href: '/admin',
      icon: <LayoutDashboard size={20} />,
      active: pathname === '/admin'
    },
    {
      name: 'Orders',
      href: '/admin/orders',
      icon: <ClipboardCopy size={20} />,
      active: isNavItemActive(pathname, '/admin/orders')
    },
    {
      name: 'Cars',
      href: '/admin/cars',
      icon: <Car size={20} />,
      active: isNavItemActive(pathname, '/admin/cars')
    },
    {
      name: 'Customers',
      href: '/admin/customers',
      icon: <User2 size={20} />,
      active: isNavItemActive(pathname, '/admin/customers')
    }
  ]
}
