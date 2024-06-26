import { locales, localePrefix, defaultLocale } from '@/5-shared/lib/i18n'
import withAuth from 'next-auth/middleware'
import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest } from 'next/server'

const publicRoutes = ['/login', '/registration', '/forgot-password']

const intlMiddleware = createIntlMiddleware({
  defaultLocale,
  localePrefix,
  locales,
})

const authMiddleware = withAuth(
  // Note that this callback is only invoked if
  // the `authorized` callback has returned `true`
  // and not for pages listed in `pages`.
  function onSuccess(req) {
    return intlMiddleware(req)
  },
  {
    callbacks: {
      authorized: ({ token }) => token !== null,
    },
    pages: {
      signIn: '/login',
    },
  },
)

export default function middleware(req: NextRequest) {
  const publicPathnameRegex = RegExp(`^(/(${locales.join('|')}))?(${publicRoutes.join('|')})?/?$`, 'i')

  const isPublicPage = publicPathnameRegex.test(req.nextUrl.pathname)

  if (isPublicPage) {
    return intlMiddleware(req)
  } else {
    return (authMiddleware as any)(req)
  }
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
