import { toast } from '@/components/ui/use-toast';
import { ReduxStore } from '@/store';
import { customFetch } from '@/utils';
import { ActionFunction, redirect } from 'react-router-dom';
import WebsiteForm from '../website/WebsiteForm';
export const action = (store: ReduxStore): ActionFunction => async ({ request,params }): Promise<Response | null> => {
  const formData = await request.formData();
    
  const user = JSON.parse(localStorage.getItem('user'));
        const data =   await customFetch.post(`/website/${params.id}`,formData, {
              headers: {
                'Authorization': `Bearer ${user.jwt}`
              }
            });

            if(!data.data.flag){
              toast({description: data.data.message});
              return null;
            }            
            toast({description: data.data.message});
         return redirect(`/website/${data.data.data.websiteId}/produits`);
  
};

const SingleMagasin = () => {
  return (
    <>
    <p style={{marginBottom: '15px'}}>Afficher le magasin concerné</p>
    <WebsiteForm/>
    </>
  )
}

export default SingleMagasin