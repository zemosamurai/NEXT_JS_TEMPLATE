import { Sidebar } from '@/2-widgets/sidebar'

import s from './styles.module.scss'

interface IProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: IProps) {
  return (
    <section className={s.layout}>
      <Sidebar />
      <div className={s.content}>{children}</div>
    </section>
  )
}
