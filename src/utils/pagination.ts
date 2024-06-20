type ConstructUrlParams = {
  pageNumber: number;
  search: string;
  pathname: string;
  limitEmelent: number 
};

export const constructUrl = ({
  pageNumber,
  search,
  pathname,
  limitEmelent

}: ConstructUrlParams): string => {
  const searchParams = new URLSearchParams(search);
  searchParams.set('page', pageNumber.toString());
  searchParams.set('size',limitEmelent.toString())

  return `${pathname}?${searchParams.toString()}`;
};

type ConstructPrevOrNextParams = {
  currentPage: number;
  pageCount: number;
  search: string;
  pathname: string;
  limitEmelent: number
};

export const constructPrevOrNextUrl = ({
  currentPage,
  pageCount,
  search,
  pathname,
  limitEmelent
}: ConstructPrevOrNextParams): { prevUrl: string; nextUrl: string } => {
  let prevPage = currentPage - 1;
  if (prevPage < 0) prevPage = pageCount;
  const prevUrl = constructUrl({ pageNumber: prevPage, search, pathname,limitEmelent });

  let nextPage = currentPage + 1;
  if (nextPage > pageCount) nextPage = 0;
  const nextUrl = constructUrl({ pageNumber: nextPage, search, pathname,limitEmelent });

  return { prevUrl, nextUrl };
};
