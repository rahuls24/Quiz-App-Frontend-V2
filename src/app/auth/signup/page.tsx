'use client';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSigninUserByEmailMutation } from '../../../../services/auth';

const authBgcImg =
  'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

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
function Signup() {
  const [signupUser, { isError, isLoading, error }] =
    useSigninUserByEmailMutation();
  const [shouldShowPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      role: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      let user = await signupUser(values);
    },
  });
  const roleRadioBtns = (
    <FormControl fullWidth>
      <FormLabel id="role">Role</FormLabel>
      <RadioGroup
        aria-labelledby="role-radio-buttons-group"
        name="role"
        id="role"
        value={formik.values.role}
        row
        sx={{ gap: 4 }}
        onChange={formik.handleChange}
      >
        <FormControlLabel
          value="examinee"
          control={<Radio />}
          label="Examinee"
        />
        <FormControlLabel
          value="examiner"
          control={<Radio />}
          label="Examiner"
        />
      </RadioGroup>
    </FormControl>
  );
  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${authBgcImg})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 2,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                autoFocus
              />
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
                        {shouldShowPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                autoComplete="current-password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              {roleRadioBtns}

              <LoadingButton
                loading={isLoading}
                type="submit"
                loadingPosition="end"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                endIcon={<ArrowRightIcon />}
              >
                Sign Up
              </LoadingButton>
              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="/auth/signin" variant="body2">
                    {'Already have an account? Sign In'}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
