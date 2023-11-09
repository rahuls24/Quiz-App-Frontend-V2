'use client';
// Services
import { useSignupUserByEmailMutation } from '@/services/auth/auth';

// Formik and Validation
// skipcq: JS-C1003
import * as yup from 'yup';
import { useFormik } from 'formik';

// Toast Notifications
import { toast } from 'react-toastify';

// Next.js
import { useRouter } from 'next/navigation';

const validationSchema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  role: yup
    .string()
    .lowercase()
    .matches(/^examiner$|^examinee$/, 'Role can be examiner or examinee')
    .required('Role is required'),
});

/**
 * Custom Hook: useEmailSignupForm
 *
 * This custom hook provides form handling logic for the user sign-up process, including
 * handling form values, validation, and submission. It uses the `useSigninUserByEmailMutation`
 * from an external source to handle the actual sign-up operation.
 *
 * @returns {object} An object containing the following properties:
 *   - formik: The formik object for managing form state and validation.
 *   - isLoading: A boolean indicating whether the sign-up operation is in progress.
 *
 * @example
 * const { formik, isLoading } = useEmailSignupForm();
 * // Use the 'formik' object to manage form state and validation.
 * // 'isLoading' indicates whether the sign-up operation is in progress.
 */
function useEmailSignupForm() {
  const [signupUser, { isLoading }] = useSignupUserByEmailMutation();
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const user = await signupUser(values);
      if ('error' in user) {
        toast.error(String(user.error), {
          position: 'bottom-left',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        return;
      }
      router.push('/auth/signin');
    },
  });
  return {
    formik,
    isLoading,
  };
}

export default useEmailSignupForm;
