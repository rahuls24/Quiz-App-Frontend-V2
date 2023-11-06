'use client';
// Next.js
import { useRouter } from 'next/navigation';

// Redux
import { useAppDispatch } from '@/store/hooks';
import { setAuthToken, setIsLoggedIn } from '@/store/globalSlice';

// Services
import { useSigninUserByEmailMutation } from '@/services/auth/auth';

// Redux Toolkit
import { compose } from '@reduxjs/toolkit';

// Formik
import { useFormik } from 'formik';

// Yup
import * as yup from 'yup';

// React Toastify
import { toast } from 'react-toastify';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function useEmailSigninForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [signinUser, { isLoading }] = useSigninUserByEmailMutation();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let data = await signinUser(values);
      console.log({
        data,
      });
      if (!('error' in data)) {
        compose(dispatch, setIsLoggedIn)(true);
        compose(dispatch, setAuthToken)(data.data);
        router.push('/');
      } else {
        toast.error(String(data.error), {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
      }
    },
  });
  return {
    formik,
    isLoading,
  };
}
