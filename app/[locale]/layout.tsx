import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/1-app/styles/globals.scss'
import { ThemeProvider } from 'next-themes'
import { AuthProvider } from '@/1-app/authProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Next Template',
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
