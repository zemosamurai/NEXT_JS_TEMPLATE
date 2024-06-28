import { Link } from '@/5-shared/lib/i18n'

import s from './styles.module.scss'

interface IProps {
  id: number
  title: string
}

export const Item = ({ id, title }: IProps) => {
  return (
    <Link href={`/films/${id}`} className={s.item}>
      {title}
    </Link>
  )
}
