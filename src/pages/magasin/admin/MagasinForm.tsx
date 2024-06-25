import { useAppSelector } from "@/hooks";
import { ReduxStore } from "@/store";
import { customFetch } from "@/utils";
import { ActionFunction, Form } from "react-router-dom"
export const action = (store: ReduxStore): ActionFunction => async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const user = JSON.parse(localStorage.getItem('user'));
            await customFetch.post(`/magasins/${user.userId}`,formData, {
                headers: {
                  'Authorization': `Bearer ${user.jwt}`
                }
              });

    return null;
  };
export const MagasinForm = () => {
  return <>
    <Form method='post' encType="multipart/form-data">
                  <input name='libele' className="Input" id="libele" defaultValue="Pedro Duarte" />
                  <input name='description' className="Input" id="description" defaultValue="@peduarte" />
                  <input name='logoFile' type='file' className="Input" id="logoFile" />
                  <button type='submit' className="Button">Ajouter</button>
    </Form> 
</>
  
}


