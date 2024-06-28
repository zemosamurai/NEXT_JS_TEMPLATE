import { CounterStoreProvider } from '@/3-features/tasks'
import { TasksList } from '@/3-features/tasks/ui/tasksList/tasksList'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import s from './styles.module.scss'

interface IProps {
  params: { locale: string }
}

export default async function Tasks({ params: { locale } }: IProps) {
  const t = await getTranslations({ locale, namespace: 'tasks' })

  return (
    <CounterStoreProvider>
      <main>
        <h2 className={s.title}>{t('title')}</h2>

        <TasksList />
      </main>
    </CounterStoreProvider>
  )
}

export async function generateMetadata({ params: { locale } }: IProps): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'tasks' })

  return {
    title: t('meta.title'),
    description: t('meta.title'),
  }
}
