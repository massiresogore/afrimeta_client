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
import { loader as commandeLoader } from './pages/commande/Commande';
import { loader as ordersLoader } from './pages/Orders';
import {loader as websiteLoader} from "./pages/website/Website"
// actions

import { action as registerUser } from './pages/auth/Register';
import { action as loginUser } from './pages/auth/Login';
import { action as commandetAction } from './pages/commande/CommandeForm';
import {action as magasinAddAction} from './pages/magasin/admin/MagasinForm';
import {action as websiteAddAction} from './pages/magasin/SingleMagasin';
import {action as produitAddAction} from './pages/website/SingleWebsite';

import { store } from './store';
import { Magasin } from './pages/magasin';
import Show from './pages/produit/Show';
import Commande from './pages/commande/Commande';
import { MagasinForm } from './pages/magasin/admin/MagasinForm';
import Website from './pages/website/Website';
import SingleMagasin from './pages/magasin/SingleMagasin';
import SingleWebsite from './pages/website/SingleWebsite';
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
        element: <Commande />,
        errorElement: <ErrorElement />,
        loader: commandeLoader(store),
        action: commandetAction(store),
      },
      {
        path: 'admin/magasins',
        element: <MagasinForm/>,
        errorElement: <ErrorElement />,
        //loader: commandeLoader(store),
        action: magasinAddAction(store),
      },
      {
        path: 'magasin/:id/website',
        element: <SingleMagasin/>,
        errorElement: <ErrorElement />,
        //loader: commandeLoader(store),
        action: websiteAddAction(store),
      },
      {
        path: 'websites',
        element: <Website/>,
        errorElement: <ErrorElement />,
        loader: websiteLoader(store),
        //action: websiteAddAction(store),
      },
      {
        path: 'website/:id/produits',
        element: <SingleWebsite/>,
        errorElement: <ErrorElement />,
        //loader: websiteLoader(store),
        action: produitAddAction(store),
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
