import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { MagasinsPaginationResultInterface } from '@/pages/magasin/MagasinsPaginationResultInterface';
import {
  ProductsResponseWithParams,
  constructUrl,
  constructPrevOrNextUrl,
} from '@/utils';
import React, { PropsWithChildren } from 'react';

import { useLoaderData, useLocation } from 'react-router-dom';

function PaginationContainer() {
  const  data = useLoaderData() as MagasinsPaginationResultInterface;
  //const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
/* 
  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  if (pageCount < 2) return null;
*/


let pageCount = data.data.totalPages==1 ? 0:data.data.totalPages - 1 ;
let pageNumber = data.data.pageable.pageSize;

const searchParams = new URLSearchParams(search);
let limitEmelent = Number(searchParams.get('size'));
if(limitEmelent== 0) limitEmelent=10;

const url = constructUrl({ pageNumber, search, pathname,limitEmelent });
  const renderPagination = ()=> {
   // const isActive = pageNumber === page;
    //const url = constructUrl({ pageNumber, search, pathname });
    return (
      <PaginationItem key={data.data.pageable.pageNumber}>
        <PaginationLink to={url} isActive={data.data.last}>
          {data.data.pageable.pageNumber}
        </PaginationLink>
      </PaginationItem>
    );
  };
  const { prevUrl, nextUrl } = constructPrevOrNextUrl({
    currentPage: data.data.number,
    pageCount,
    search,
    pathname,
    limitEmelent
  });
 // console.log(data.data.totalPages,data.data.pageable.pageSize);
  
  return (
    <Pagination className='mt-16'>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious to={prevUrl} />
        </PaginationItem>
        {renderPagination()}
        <PaginationItem>
          <PaginationNext to={nextUrl} /> 
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
export default PaginationContainer;
