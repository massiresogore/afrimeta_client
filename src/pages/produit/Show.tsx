import { useLoaderData } from 'react-router-dom';
import { Link, type LoaderFunction } from 'react-router-dom';
import {
  customFetch,
  formatAsDollars,
  type SingleProductResponse,
  type CartItem,
} from '@/utils';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SelectProductAmount, SelectProductColor } from '@/components';
import { Mode } from '@/components/SelectProductAmount';
import { useAppDispatch } from '@/hooks';
import { addItem } from '@/features/cart/cartSlice';
import { ProduitResultInterface } from './interrface/ProduitResultInterface';

export const loader: LoaderFunction = async ({
  params,
}): Promise<ProduitResultInterface> => {
  const response = await customFetch<ProduitResultInterface>(
    `/produits/${params.id}`
  );
  return { ...response.data };
};
/*On initialise amount à 1, amount == nombre de produit,
  lorsqu'on clique sur le bouton add bag on cré 
  un nouvel(panier) objet, qui aura les propriété suivant 
{cartID,productID,image,title,price,amount,productColor,company}:Panier
  NB: la propriété amount de chaque produit est toujours égale à 1,
  pour permettre de les incrémentés(amout+=amout) lors de lajout d'un
  nouveau produit, permettant ainsi de savoir le nombre exact de produit
  dans le panier.
*/
function Show() {
  const { data: produit } = useLoaderData() as ProduitResultInterface;
//  const { image, title, price, description, colors, company } =
  //  product.attributes;
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
  //const dollarsAmount = formatAsDollars(prix);
  const [productColor, setProductColor] = useState(couleurs[0].nom);
  const [amount, setAmount] = useState(1);
  const dispatch = useAppDispatch();
  const cartProduct: CartItem = {
    cartID: produitId + productColor,
    productID: produitId,
    image: images[0].path,
    title:titre,
    price:prix.toString(),
    amount,
    productColor,
    company: website.websiteUrl
  };



  const addToCart = () => {
    dispatch(addItem(cartProduct));
  };

  return (
    <section>
      <div className='flex gap-x-2 h-6 items-center'>
        <Button asChild variant='link' size='sm'>
          <Link to='/'>Home</Link>
        </Button>
        <Separator orientation='vertical' />
        <Button asChild variant='link' size='sm'>
          <Link to='/products'>Products</Link>
        </Button>
      </div>
      {/* PRODUCT */}
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE FIRST COL */}
        <img
          src={images[0].path}
          alt={titre}
          className='w-96 h-96 object-cover rounded-lg lg:w-full'
        />
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <h1 className='capitalize text-3xl font-bold'>{titre}</h1>
          <h4 className='text-xl mt-2'>{website.websiteUrl}</h4>
          <p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
            {prix}
          </p>
          <p className='mt-6 leading-8'>{description}</p>
          {/* COLORS  */}
          <SelectProductColor
            colors={couleurs}
            productColor={productColor}
            setProductColor={setProductColor}
          />

          {/* AMOUNT  */}
          <SelectProductAmount
            mode={Mode.SingleProduct}
            amount={amount}
            setAmount={setAmount}
          />
          {/* CART BUTTON  */}
          <Button size='lg' className='mt-10' onClick={addToCart}>
            Add to bag
          </Button>
        </div>
      </div>
    </section>
  );
}
export default Show;
