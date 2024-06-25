import { ReduxStore } from "@/store";
import ProduitForm from "../produit/ProduitForm"
import { ActionFunction, redirect } from "react-router-dom";
import { customFetch } from "@/utils";
import { toast } from "@/components/ui/use-toast";

export const action = (store: ReduxStore): ActionFunction => async ({ request,params }): Promise<Response | null> => {
  const formData = await request.formData();
    
  const user = JSON.parse(localStorage.getItem('user'));
        const data =   await customFetch.post(`/produits/${params.id}`,formData, {
              headers: {
                'Authorization': `Bearer ${user.jwt}`
              }
            });

            if(!data.data.flag){
              toast({description: data.data.message});
              return null;
            }            
            toast({description: data.data.message});
         return redirect(`/products`);
  return null;
};


const SingleWebsite = () => {
  return (
    <>
        <p style={{marginBottom: '15px'}}>Affiche le website concerné</p>
        <ProduitForm/>
    </>
  )
}

export default SingleWebsite