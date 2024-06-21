import { MagasinHero, FeaturedMagasins, MagasinPaginationContainer } from '.';
import { type LoaderFunction } from 'react-router-dom';
import { customFetch } from '@/utils';
import { MagasinsPaginationResultInterface } from './interface/MagasinsPaginationResultInterface';

//const url = '/products?featured=true';
const url = "/magasins";

export const loader: LoaderFunction = async ({
  request,
}): Promise<MagasinsPaginationResultInterface> => {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  
  const response = await customFetch<MagasinsPaginationResultInterface>(url, {
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
