'use client';
import { setAuthToken, setIsLoggedIn } from '@/store/globalSlice';
import { useAppDispatch } from '@/store/hooks';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { compose } from '@reduxjs/toolkit';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as yup from 'yup';
import { useSigninUserByEmailMutation } from '../../../../services/auth/auth';
import { useTheme } from '@mui/material';
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
function SigninForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const theme = useTheme();
  // Change Document Tile
  const [signinUser, { isLoading }] = useSigninUserByEmailMutation();
  const [shouldShowPassword, setShowPassword] = useState(false);
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
  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        label="Password"
        type={shouldShowPassword ? 'text' : 'password'}
        id="password"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!shouldShowPassword)}
                onMouseDown={() => setShowPassword(!shouldShowPassword)}
                edge="end"
              >
                {shouldShowPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        autoComplete="current-password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" disabled />}
        label="Remember me"
      />
      <LoadingButton
        loading={isLoading}
        type="submit"
        loadingPosition="end"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        endIcon={<ArrowRightIcon />}
      >
        Sign In
      </LoadingButton>
      <Grid container>
        <Grid item xs>
          <Link
            href={'#'}
            style={{ color: theme.palette.primary.main ?? '#00BCD4' }}
          >
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link
            href={'/auth/signup'}
            style={{ color: theme.palette.primary.main ?? '#00BCD4' }}
          >
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SigninForm;
