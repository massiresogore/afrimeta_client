import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { type CartItem, type CartState } from '@/utils';
import { toast } from '@/components/ui/use-toast';

//EtatPanier
const defaultState: CartState = {
  cartItems: [],//ListePanier
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 0,
  tax: 0.2,
  orderTotal: 0,
};

const getCartFromLocalStorage = (): CartState => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      //payload === nouveauPanierAjouter lors de add bag de
      // de la page <SingleProduit/>
      const newCartItem = action.payload;

      //si le produit exist on augmente seulement le amount
      //puis on ajout le nouveau produit dans la liste
      const item = state.cartItems.find((i) => i.cartID === newCartItem.cartID);
      
      if (item) {
        item.amount += newCartItem.amount;
      } else {
        state.cartItems.push(newCartItem);
      }
      
      
      state.numItemsInCart += newCartItem.amount;
      state.cartTotal += Number(newCartItem.price) * newCartItem.amount;
      // state.tax = 0.1 * state.cartTotal;
      // state.orderTotal = state.cartTotal + state.shipping + state.tax;
      // localStorage.setItem('cart', JSON.stringify(state));
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: 'Item added to cart' });
    },
    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const cartID = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartID === cartID);
      if (!cartItem) return;
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID);
      state.numItemsInCart -= cartItem.amount;
      state.cartTotal -= Number(cartItem.price) * cartItem.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: 'Item removed from the cart' });
    },
    editItem: (
      state,
      action: PayloadAction<{ cartID: string; amount: number }>
    ) => {
      const { cartID, amount } = action.payload;
      const cartItem = state.cartItems.find((i) => i.cartID === cartID);
      if (!cartItem) return;

      state.numItemsInCart += amount - cartItem.amount;
      state.cartTotal += Number(cartItem.price) * (amount - cartItem.amount);
      cartItem.amount = amount;

      cartSlice.caseReducers.calculateTotals(state);
      toast({ description: 'Amount Updated' });
    },
    calculateTotals: (state) => {
      /**
       * Taxe=Prix hors taxe (HT)× 
          100
          Taux de TVA

          TVA= 20%
       */

     // state.tax = 0.1 * state.cartTotal;
      state.orderTotal = (state.tax * state.cartTotal) + state.cartTotal + state.shipping;      
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;

/**
 * Taux intermédiaire de 10% : Ce taux concerne certains 
 * produits alimentaires consommés sur place (dans les restaurants,
 *  par exemple) et certains aliments préparés ou transformés 
 * (comme les plats cuisinés)
 * 
 * 
 * 
 * 
 * Taux normal de 20% : Ce taux s'applique aux boissons 
 * alcoolisées et à certains produits alimentaires considérés 
 * comme non essentiels.
 * 
 * Taux réduit de 5,5% : Ce taux s'applique principalement 
 * aux produits alimentaires de première nécessité, tels que 
 * les fruits, les légumes, la viande, le poisson, les produits 
 * laitiers, le pain, et les boissons non alcoolisées.
 * 
 * En France, les produits d'habillement sont soumis au taux 
 * normal de la TVA, qui est de 20%.
 */