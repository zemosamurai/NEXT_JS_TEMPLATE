import { LangSwitcher } from '@/3-features/langSwitcher'
import { linksData } from '../model/linksData'
import { NavLink } from './navLink/navLink'
import s from './styles.module.scss'
import { ThemeSwitcher } from '@/3-features/themeSwitcher'
import { useTranslations } from 'next-intl'
import { LogoutButton } from '@/3-features/auth'

export const Sidebar = () => {
  const t = useTranslations('navigation')

  const links = linksData(t).map((el) => (
    <li key={el.label} className={s.link}>
      <NavLink {...el} />
    </li>
  ))

  return (
    <aside className={s.sidebar}>
      <h2 className={s.logo}>Next Template</h2>

      <nav className={s.nav}>
        <ul className={s.links}>{links}</ul>
      </nav>

      <ThemeSwitcher />

      <LangSwitcher />

      <LogoutButton />
    </aside>
  )
}
