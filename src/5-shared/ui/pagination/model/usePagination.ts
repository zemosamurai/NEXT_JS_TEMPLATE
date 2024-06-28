import { useMemo } from 'react'

import { DOTS, LEFT_ITEMS_COUNT, MAX_VISIBLE_PAGES, RIGHT_ITEMS_COUNT, SIBLING_ITEM_COUNT } from './defaultValues'
import { range } from './range'

interface IProps {
  totalCount: number
  pageSize: number
  currentPage: number
}

export const usePagination = ({ totalCount, pageSize, currentPage }: IProps) => {
  return useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)

    // not show dots if the number of pages is less than the maximum
    if (MAX_VISIBLE_PAGES >= totalPageCount) {
      return range(1, totalPageCount)
    }

    const leftSiblingIndex = Math.max(currentPage, 1)
    const rightSiblingIndex = Math.min(currentPage, totalPageCount)

    const isShowLeftDots = leftSiblingIndex >= LEFT_ITEMS_COUNT
    const isShowRightDots = rightSiblingIndex <= totalPageCount - RIGHT_ITEMS_COUNT + 1

    // Show left dots
    if (!isShowLeftDots && isShowRightDots) {
      const leftRange = range(1, LEFT_ITEMS_COUNT)

      return [...leftRange, DOTS, totalPageCount]
    }

    // Show right dots
    if (isShowLeftDots && !isShowRightDots) {
      const rightRange = range(totalPageCount - RIGHT_ITEMS_COUNT + 1, totalPageCount)

      return [1, DOTS, ...rightRange]
    }

    // Show left and right dots
    if (isShowLeftDots && isShowRightDots) {
      const middleRange = range(leftSiblingIndex - SIBLING_ITEM_COUNT, rightSiblingIndex + SIBLING_ITEM_COUNT)

      return [1, DOTS, ...middleRange, DOTS, totalPageCount]
    }

    return []
  }, [totalCount, pageSize, currentPage])
}
