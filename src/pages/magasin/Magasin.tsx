import { MagasinHero, FeaturedMagasins, MagasinPaginationContainer } from '.';
import { type LoaderFunction } from 'react-router-dom';
import { ProductsResponseWithParams, customFetch, type ProductsResponse } from '@/utils';

//const url = '/products?featured=true';
const url = "/magasins";
//{{baseUrl}}/produits/bataclan?paage=1&size=10&sort=titre,asc
/* export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);

  return { ...response.data };
};
 */
export const loader: LoaderFunction = async ({
  request,
}): Promise<ProductsResponseWithParams> => {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  
  const response = await customFetch<ProductsResponse>(url, {
    params,
  });

  return { ...response.data, params };
} 

function Magasin() {
  return (
    <>
      <MagasinHero />
      <FeaturedMagasins />
      <MagasinPaginationContainer/>
    </>
  );
}
export default Magasin;
