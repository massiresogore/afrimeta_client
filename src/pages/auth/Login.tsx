import {
  Form,
  Link,
  redirect,
  type ActionFunction,
  useNavigate,
} from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SubmitBtn, FormInput } from '@/components';
import { customFetch } from '@/utils';
import { toast } from '@/components/ui/use-toast';
import { type ReduxStore } from '@/store';
import { loginUser } from '@/features/user/userSlice';
import { useAppDispatch } from '@/hooks';
import axios, { AxiosResponse } from 'axios';
import { METHODS } from 'http';
import { error } from 'console';
import { AuthResultResponseInterface } from './interface/AuthResultResponseInterface';
import { useState } from 'react';

export const action =
  (store: ReduxStore): ActionFunction =>
    async ({ request }): Promise<Response | null> => {
      const formData = await request.formData();
      const data = Object.fromEntries(formData);


      //console.log(data.username,data.password);

      // try {

      const response = await fetch('http://localhost:8080/api/v1/auth/login', {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(`${data.username}:${data.password}`)
        }
      });

      const body: AuthResultResponseInterface = await response.json();

      if (!body.flag) {
        toast({ description: body.message })
        return null;
      };

      const username = body.data.userInfo.username;
      const jwt = body.data.token;
      store.dispatch(loginUser({ username, jwt }));
      return redirect('/');
    };

function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async (): Promise<void> => {
    try {
      const response: AxiosResponse = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      });
      const username = response.data.user.username;
      const jwt = response.data.jwt;
      dispatch(loginUser({ username, jwt }));
      navigate('/');
    } catch (error) {
      console.log(error);
      toast({ description: 'Login Failed' });
    }
  };
  return (
    <section className='h-screen grid place-items-center'>
      <Card className='w-96 bg-muted'>
        <CardHeader>
          <CardTitle className='text-center'>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method='post'>
            <FormInput type='text' label='username' name='username' />
            <FormInput type='password' name='password' />
            <SubmitBtn text='Login' className='w-full mt-4' />
            <Button
              type='button'
              variant='outline'
              onClick={loginAsGuestUser}
              className='w-full mt-4'
            >
              Guest User
            </Button>
            <p className='text-center mt-4'>
              Not a member yet?{' '}
              <Button type='button' asChild variant='link'>
                <Link to='/register'>Register</Link>
              </Button>
            </p>
          </Form>
        </CardContent>
      </Card>
    </section>
  );
}
export default Login;
