import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { MagasinsPaginationResultInterface } from './interface/MagasinsPaginationResultInterface';
import { MagasinInterface } from './interface/MagasinsInterface';
//import { formatAsDollars, type ProductsResponse } from '@/utils';

function MagasinsGrid() {
  const { data: magasins } = useLoaderData() as MagasinsPaginationResultInterface;
    //console.log(products);
    /* 
  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        const dollarsAmount = formatAsDollars(price);
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Card>
              <CardContent className='p-4'>
                <img
                  src={image}
                  alt={title}
                  className='rounded-md h-64 md:h-48 w-full object-cover'
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-xl font-semibold capitalize'>{title}</h2>
                  <p className='text-primary font-light mt-2'>
                    {dollarsAmount}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  ); */


  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
    

      {magasins.content.map((magasin:MagasinInterface,index:number) => {
        const { logo,libele,description } = magasin;
        //console.log(logo);

        
        
       // const dollarsAmount = formatAsDollars(price);
        return (
/*           <Link to={`/products/${magasin.magasinId}`} key={magasin.magasinId}>
 */          <Link to={`/products`} key={index}>
            <Card>
              <CardContent className='p-4'>
                <img
                  src={logo.path}
                  alt={logo.logoName}
                  className='rounded-md h-64 md:h-48 w-full object-cover'
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-xl font-semibold capitalize'>{libele}</h2>
                  <p className='text-primary font-light mt-2'>
                    {description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
export default MagasinsGrid;
