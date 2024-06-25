import { ReduxStore } from "@/store";
import { customFetch } from "@/utils";
import { ActionFunction, Link, LoaderFunction, useLoaderData } from "react-router-dom";
import WebsiteForm from "./WebsiteForm";
import { toast } from "@/components/ui/use-toast";
import { WebsiteResultInterface } from "./interface/WebsiteResultInterface";

 
const url = '/website'; 
export const loader =(store:ReduxStore):LoaderFunction =>  async ({
  request,
}): Promise<any> => {
  const user = JSON.parse(localStorage.getItem('user'));
  const response:WebsiteResultInterface = await customFetch(url,{
    headers: {
      'Authorization': `Bearer ${user.jwt}`
    }
  });

  //console.log(response);
  

  return { ...response.data };
};

export const action = (store: ReduxStore): ActionFunction => async ({ request,params }): Promise<Response | null> => {
  const formData = await request.formData();
    
  const user = JSON.parse(localStorage.getItem('user'));
        const data =   await customFetch.post(`/website/${params.id}`,formData, {
              headers: {
                'Authorization': `Bearer ${user.jwt}`
              }
            });

          if(data.data.flag== true){
            toast({description: data.data.message});
          }            

  return null;
};
const Website = () => {
  const data = useLoaderData() as WebsiteResultInterface;

  return (<>
<div className="flex min-h-screen">
    <table className="min-w-full bg-white shadow-md rounded-xl">
      <thead>
        <tr className="bg-blue-gray-100 text-gray-700">
          <th className="py-3 px-4 text-left">Website Url</th>
          <th className="py-3 px-4 text-left">Action</th>
        </tr>
      </thead>
      <tbody className="text-blue-gray-900">
        {data.data.map((website,index)=> (<tr key={index} className="border-b border-blue-gray-200">
          <td className="py-3 px-4">{website.websiteUrl}</td>
          <td className="py-3 px-4">
            <Link to={`/website/${website.websiteId}/produits`} className="font-medium text-blue-600 hover:text-blue-800">Add produits</Link>
          </td>
        </tr>))}        
      </tbody>
    </table>
  </div>

  </>)
}

export default Website