import classnames from 'classnames'
import React from 'react'

import { DOTS } from '../model/defaultValues'
import { usePagination } from '../model/usePagination'
import s from './styles.module.scss'

export interface IPaginationProps {
  onPageChange: (page: number | string) => void
  totalCount: number
  currentPage: number
  pageSize: number
  className?: string
  disable?: boolean
}

export const PaginationComponent = ({ currentPage, onPageChange, pageSize, totalCount, disable, className = '' }: IPaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    if (currentPage === Math.ceil(totalCount / pageSize)) return

    onPageChange(currentPage + 1)
  }

  const handleChangePage = (page: number) => {
    if (page === currentPage) return

    onPageChange(page as number)
  }

  const lastPage = paginationRange.at(-1)

  return (
    <ul className={classnames(s.container, [className])}>
      {paginationRange.map((pageNumber, i) =>
        pageNumber === DOTS ? (
          <li
            key={pageNumber + i}
            className={classnames(s.dots, {
              [s.disabled]: disable,
            })}
          >
            {DOTS}
          </li>
        ) : (
          <li key={pageNumber}>
            <button
              tabIndex={0}
              className={classnames(s.item, {
                [s.selected]: pageNumber === currentPage,
                [s.disabled]: disable,
              })}
              onClick={() => handleChangePage(pageNumber as number)}
            >
              {pageNumber}
            </button>
          </li>
        ),
      )}

      <li>
        <button
          tabIndex={0}
          className={classnames(
            s.item,
            {
              [s.disabled]: currentPage === lastPage || disable,
            },
            [s.forward],
          )}
          onClick={onNext}
        >
          <span>Дальше {'>'}</span>
        </button>
      </li>
    </ul>
  )
}
