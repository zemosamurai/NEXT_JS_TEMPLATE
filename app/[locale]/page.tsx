import { authApi } from '@/4-entities/auth'
import { redirect } from '@/5-shared/lib/i18n'

export default async function RootPage() {
  const res = await authApi.me()

  if (!res) {
    redirect(`/login`)
    return
  }

  redirect(`/home`)
}
