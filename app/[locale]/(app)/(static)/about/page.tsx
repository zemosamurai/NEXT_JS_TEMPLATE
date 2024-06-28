import { Metadata } from 'next'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

interface IProps {
  params: { locale: string }
}

export default async function About({ params: { locale } }: IProps) {
  // unstable_setRequestLocale для работы статики
  unstable_setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: 'about' })

  return (
    <main>
      <h2>{t('title')}</h2>
    </main>
  )
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'about' })

  return {
    title: t('meta.title'),
    description: t('meta.title'),
  }
}
