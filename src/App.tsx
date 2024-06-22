import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  Cart,
  About,
  Register,
  Login,
  Checkout,
  Orders,
} from './pages';
import { ErrorElement } from './components';

import { loader as landingLoader } from './pages/Landing';
import { loader as productsLoader } from './pages/produit/Products';
import { loader as showProductLoader } from "@/pages/produit/Show"
import { loader as checkoutLoader } from './pages/Checkout';
import { loader as ordersLoader } from './pages/Orders';
// actions

import { action as registerUser } from './pages/auth/Register';
import { action as loginUser } from './pages/auth/Login';
import { action as checkoutAction } from './components/CheckoutForm';

import { store } from './store';
import { Magasin } from './pages/magasin';
import Show from './pages/produit/Show';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      /* {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      }, */
      {
        index: true,
        element: <Magasin />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoader,
      },
      {
        path: 'products/:id',
        element: <Show />,
        errorElement: <ErrorElement />,
        loader: showProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'about',
        element: <About />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginUser(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerUser,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
