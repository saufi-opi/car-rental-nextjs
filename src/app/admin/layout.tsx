import FloatingBar from '@/components/layout/FloatingBar'
import Sidebar from '@/components/layout/Sidebar'
import { type ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function layout(props: Props) {
  return (
    <div className="flex">
      <Sidebar />
      <FloatingBar />
      <main className="flex-1 pt-10 p-6 bg-muted">{props.children}</main>
    </div>
  )
}
