import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '../utils';
import { type LoaderFunction } from 'react-router-dom';

 const url = '/produits/bataclan'; 
//const url = '/magasins';

/* export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch<ProductsResponse>(url, {
    params,
  });

  return { ...response.data, params };
}; */

export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);

  const response = await customFetch(url, {
    params,
  });

  return { ...response.data, params };
};

function Products() {
  return (
    <>
      {/* <Filters /> */}
      <ProductsContainer />
{/*       <PaginationContainer />
 */}    </>
  );
}
export default Products;
