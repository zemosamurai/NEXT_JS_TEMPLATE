"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PaginationComponent } from "./ui/paginationComponent";

interface IProps {
  totalCount: number;
  queryName?: string;
  pageSize?: number;
  className?: string;
}

export const Pagination = ({
  totalCount,
  pageSize = 20,
  queryName = "page",
}: IProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get(queryName)) || 1;
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set(queryName, pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <PaginationComponent
      currentPage={currentPage}
      pageSize={pageSize}
      totalCount={totalCount}
      onPageChange={createPageURL}
    />
  );
};
