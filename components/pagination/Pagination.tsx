import { ICategory, ITag } from "@types";
import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  selectedCategory?: ICategory;
  selectedTag?: ITag;
  pagination: [];
};

export const Pagination = ({
  currentPage,
  selectedCategory,
  selectedTag,
  pagination,
}: PaginationProps) => {
  const getPath = (pageNumber: number) => {
    if (selectedCategory) {
      return `/category/${selectedCategory}/page/${pageNumber}`;
    } else if (selectedTag) {
      return `/tags/${selectedTag}/page/${pageNumber}`;
    } else {
      return `/page/${pageNumber}`;
    }
  };
  return (
    <div>
      <ul>
        {currentPage > 1 && (
          <li>
            <Link href={getPath(currentPage - 1)} passHref prefetch={false}>
              前のページへ
            </Link>
          </li>
        )}
        {currentPage > 3 && (
          <li>
            <Link href={getPath(1)}>1</Link>
          </li>
        )}
        {currentPage > 4 && <li>...</li>}
        {pagination.map((page, index) => {
          if (currentPage - 3 <= page && page <= currentPage + 1) {
            return (
              <li key={index}>
                <Link href={getPath(page + 1)} passHref prefetch={false}>
                  {page + 1}
                </Link>
              </li>
            );
          }
        })}
        {currentPage + 3 < pagination.length && <li>...</li>}
        {currentPage + 2 < pagination.length && (
          <li>
            <Link href={getPath(pagination.length)} passHref prefetch={false}>
              {pagination.length}
            </Link>
          </li>
        )}
        {currentPage < pagination.length && (
          <li>
            <Link href={getPath(currentPage + 1)} passHref prefetch={false}>
              次のページへ
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
