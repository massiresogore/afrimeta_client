import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import './styles.css';
import { ActionFunction, Form, Link } from 'react-router-dom';
import { ReduxStore } from '@/store';
import { CardContent } from '@/components/ui/card';
import { FormInput, SubmitBtn } from '@/components';
import { Button } from '@/components/ui/button';
export const action = (store: ReduxStore): ActionFunction => async ({ request }): Promise<Response | null> => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

console.log(data);



    return null;
  };


const AddMagasinButon = () => {

     {/* <Form method='post'>
                  <input name='libele' className="Input" id="libele" defaultValue="Pedro Duarte" />
                  <input name='description' className="Input" id="description" defaultValue="@peduarte" />
                  <input name='logo' type='file' className="Input" id="logo" />
                  <button type='submit' className="Button">Ajouter</button>

    </Form> */}

    return <CardContent>
          <Form method='post'>
            <FormInput type='text' label='username' defaultValue='micho' name='username' />
            <FormInput type='password' defaultValue='12345678' name='password' />
            <SubmitBtn text='add' className='w-full mt-4' />
            
            <p className='text-center mt-4'>
              Not a member yet?{' '}
              <Button type='button' asChild variant='link'>
                <Link to='/register'>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
    

return (
  
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="Button violet">Ajouter un magasin</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Ajouter un magasin</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Make changes to your profile here. Click save when you're done.
        </Dialog.Description>
        <Form method='post'>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="libele">
            Libele
          </label>
          <input name='libele' className="Input" id="libele" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="description">
            Description
          </label>
          <input name='description' className="Input" id="description" defaultValue="@peduarte" />
        </fieldset>
          <label className="Label" htmlFor="logo">
            Logo
          </label>
          <input name='logo' type='file' className="Input" id="logo" />

        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
          {/* <Dialog.Close asChild>
            <button className="Button green">Save changes</button>
          </Dialog.Close> */}
            <button type='button' className="Button">Ajouter</button>
        </div>
        </Form>
        {/* <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close> */}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
}
export default AddMagasinButon;