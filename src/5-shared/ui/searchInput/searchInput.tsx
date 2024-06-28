'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

import s from './styles.module.scss'

interface IProps {
  placeholder?: string
  queryName?: string
}

export const SearchInput = ({ placeholder, queryName = 'search' }: IProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = useDebouncedCallback((searchStr: string) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')

    if (searchStr) {
      params.set(queryName, searchStr)
    } else {
      params.delete(queryName)
    }

    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <input
      placeholder={placeholder}
      onChange={(e) => {
        handleSearch(e.currentTarget.value)
      }}
      className={s.root}
      defaultValue={searchParams.get('search')?.toString()}
    />
  )
}
