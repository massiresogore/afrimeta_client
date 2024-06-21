import { useLoaderData } from 'react-router-dom';
import MagasinsGrid from './MagasinsGrid';
import MagasinsList from './MagasinsList';
import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { type ProductsResponse } from '@/utils';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

function MagasinsContainer() {
  const { data:products } = useLoaderData() as ProductsResponse;
 // const totalProducts = meta.pagination.total;
  const totalProducts = products.totalElements;

  //console.log(totalProducts);
  

 

  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  return (
    <>
      {/* HEADER */}
        <section>
        <div className='flex justify-between items-center mt-8'>
          <h4 className='font-medium text-md'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              onClick={() => setLayout('grid')}
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size='icon'
            >
              <LayoutGrid />
            </Button>
            <Button
              onClick={() => setLayout('list')}
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='icon'
            >
              <List />
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>
        <div>
        {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <MagasinsGrid />
        ) : <p>List de produits</p>}
       {totalProducts === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <MagasinsGrid />
        ) : (
           <MagasinsList /> 
        )} 
      </div>  
    </>
  );
}
export default MagasinsContainer;