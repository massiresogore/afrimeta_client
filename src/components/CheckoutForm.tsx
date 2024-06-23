import { ActionFunction, Form, redirect } from 'react-router-dom';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { CommandeRequest, Panier, customFetch, formatAsDollars, type Checkout } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { clearCart } from '../features/cart/cartSlice';
import { ReduxStore, store } from '@/store';
import { useAppSelector } from '@/hooks';
import { exit } from 'process';
import { useStore } from 'react-redux';
import { User } from 'lucide-react';

export const action =
  (store: ReduxStore): ActionFunction =>
  async ({ request }): Promise<null | Response> => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const address = formData.get('address') as string;

    if (!name || !address) {
      toast({ description: 'Remplir tous les champs s\'il vous plait ' });
      return null;
    }
    const user = store.getState().userState.user;
    
     if (!user) {
      toast({ description: 'please login to place an order' });
      return redirect('/login');
    } 
 
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

      //transforme cartItems to paniers
  
  const paniers:Array<Panier> = cartItems.map(item => ({
    produitId: item.productID,
    quantity: item.amount,
    couleurName: item.productColor
  }));

   /******** Command to be send *******/
   const commandeRequest:CommandeRequest = {
      adresse: address,
      prixTotal: orderTotal.toString(),
      commandeTotal: orderTotal.toString(),
      paniers:paniers,
      nombreProduit:numItemsInCart,
   }

   //console.log(commandeRequest);
  
   
     try {
      await customFetch.post(
        `/commandes/client/${user.userId}`,
        commandeRequest,
        {
          headers: {
            Authorization: `Bearer ${user?.jwt}`,
          },
        }
      );

      store.dispatch(clearCart());
      toast({ description: 'order placed' });
      return redirect('/orders');
    } catch (error) {
      toast({ description: 'order failed' });
      return null;
    } 
  };



function CheckoutForm() {  
  const user = store.getState().userState.user;

  //const state = useAppSelector(state => state);

  //console.log(state.cartState);
  
  return (
    <Form method='post' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl mb-4'>Shipping Information</h4>
      <FormInput label='first name' name='name' type='text' defaultValue={user?.username} />
      <FormInput label='address' name='address' type='text' />
      <SubmitBtn text='Place Your Order' className=' mt-4' />
    </Form>
  );
}
export default CheckoutForm;




