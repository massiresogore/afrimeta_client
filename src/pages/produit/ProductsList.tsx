import { formatAsDollars, type ProductsResponse } from '@/utils';
import { Link, useLoaderData } from 'react-router-dom';
import { Card,CardContent } from '@/components/ui/card';
import { ProduitsPaginationResultInterface } from './interrface/ProduitsPaginationResultInterface';
import { ProduitInterface } from './interrface/ProduitInterface';

function ProductsList() {
  const { data: products } = useLoaderData() as ProduitsPaginationResultInterface;

  return (
    <div className='mt-12 grid gap-y-8'>
      {products.content.map((produit:ProduitInterface,index:number) => {
        const { produitId,
          titre,
          description,
          quantiteStock,
          prix,
          dateAjout,
          categorie,
          typeProduit,
          website,
          couleurs,
          images } = produit;
        const dollarsAmount = formatAsDollars(prix);
        return (
          <Link key={produitId} to={`/produits/${produitId}`}>
            <Card>
              <CardContent className='p-8 gap-y-4 grid md:grid-cols-3'>
                <img
                  src={images[0].path}
                  alt={titre}
                  className='h-64 w-full md:h-48 md:w-48 rounded-md object-cover'
                />
                <div>
                  <h2 className='text-xl font-semibold capitalize'>{titre}</h2>
                  <h4>{website.websiteUrl}</h4>
                </div>
                <p className='text-primary md:ml-auto'>{prix}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
}
export default ProductsList;
