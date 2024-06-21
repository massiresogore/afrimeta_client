import { Filters, ProductsContainer } from '@/components';
import {
  customFetch,
  type ProductsResponse,
  type ProductsResponseWithParams,
} from '../../utils';
import { type LoaderFunction } from 'react-router-dom';
import { ProduitsPaginationResultInterface } from './interrface/ProduitsPaginationResultInterface';
import ProduitPaginationContainer from './ProduitPaginationContainer';

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
}): Promise<ProduitsPaginationResultInterface> => {
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
      <ProduitPaginationContainer/>
    </>
  );
}
export default Products;
