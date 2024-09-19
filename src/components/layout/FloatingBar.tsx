import { Bell, Moon } from 'lucide-react'
import UserAvatar from '../UserAvatar'

export default function FloatingBar() {
  return (
    <div className="absolute right-10 top-10 flex items-center justify-between gap-10 rounded-full border-[1px] px-2 py-1 bg-background">
      <div>search</div>
      <div className="flex items-center gap-2">
        <Bell className="h-5 w-5" />
        <Moon className="h-5 w-5" />
        <UserAvatar />
      </div>
    </div>
  )
}
