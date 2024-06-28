'use client'

import { Button } from '@/5-shared/ui'
import { signOut } from 'next-auth/react'

export const LogoutButton = () => {
  const handleLogout = () => {
    signOut({ callbackUrl: '/login' })
  }

  return <Button onClick={handleLogout}>logout</Button>
}
