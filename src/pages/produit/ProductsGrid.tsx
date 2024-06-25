import { Link, useLoaderData } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { ProduitsPaginationResultInterface } from './interrface/ProduitsPaginationResultInterface';
import { ProduitInterface } from './interrface/ProduitInterface';
import { formatAsDollars } from '@/utils';
import defaultImage from "../../../public/defaultImage.png"
function ProductsGrid() {
  const { data: products } = useLoaderData() as ProduitsPaginationResultInterface;
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
        //console.log(logo);

        
        
        const dollarsAmount = formatAsDollars(prix);
        return (
           <Link to={`/products/${produit.produitId}`} key={produit.produitId}>
             <Card>
              <CardContent className='p-4'>
                <img
                  src={images[0] ? images[0]?.path : defaultImage }
                  alt={images[0]?.imageName}
                  className='rounded-md h-64 md:h-48 w-full object-cover'
                />
                <div className='mt-4 text-center'>
                  <h2 className='text-xl font-semibold capitalize'>{titre}</h2>
                  <p className='text-primary font-light mt-2'>
                    {prix}€
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
export default ProductsGrid;
