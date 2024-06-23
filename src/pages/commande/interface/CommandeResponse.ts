 export type Order = {
    id: number;
    attributes: {
      address: string;
      cartItems: CartItem[];
      createdAt: string;
      name: string;
      numItemsInCart: number;
      orderTotal: string;
      publishedAt: string;
      updatedAt: string;
    };
  }; 

  //Panier
export type CartItem = {
    cartID: string;
    productID: number;
    image: string;
    title: string;
    price: string;
    amount: number;
    productColor: string;
    company: string;
  };