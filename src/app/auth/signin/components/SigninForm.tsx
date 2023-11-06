'use client';
// MUI Icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// MUI Lab
import LoadingButton from '@mui/lab/LoadingButton';

// MUI Material
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';

// Next.js
import Link from 'next/link';

// React
import { useState } from 'react';

// Custom Hooks
import useEmailSigninForm from '../hooks/useEmailSigninForm';

function SigninForm() {
	const theme = useTheme();
	const [shouldShowPassword, setShowPassword] = useState(false);
	const { formik, isLoading } = useEmailSigninForm();
	return (
		<Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
			<TextField
				margin='normal'
				fullWidth
				id='email'
				label='Email Address'
				name='email'
				autoComplete='email'
				value={formik.values.email}
				onChange={formik.handleChange}
				error={formik.touched.email && Boolean(formik.errors.email)}
				helperText={formik.touched.email && formik.errors.email}
			/>
			<TextField
				margin='normal'
				fullWidth
				name='password'
				label='Password'
				type={shouldShowPassword ? 'text' : 'password'}
				id='password'
				InputProps={{
					endAdornment: (
						<InputAdornment position='end'>
							<IconButton
								aria-label='toggle password visibility'
								onClick={() =>
									setShowPassword(!shouldShowPassword)
								}
								onMouseDown={() =>
									setShowPassword(!shouldShowPassword)
								}
								edge='end'
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
				autoComplete='current-password'
				value={formik.values.password}
				onChange={formik.handleChange}
				error={
					formik.touched.password && Boolean(formik.errors.password)
				}
				helperText={formik.touched.password && formik.errors.password}
			/>
			<FormControlLabel
				control={<Checkbox value='remember' color='primary' disabled />}
				label='Remember me'
			/>
			<LoadingButton
				loading={isLoading}
				type='submit'
				loadingPosition='end'
				fullWidth
				variant='contained'
				sx={{ mt: 3, mb: 2 }}
				endIcon={<ArrowRightIcon />}
			>
				Sign In
			</LoadingButton>
			<Grid container>
				<Grid item xs>
					<Link
						href={'#'}
						style={{
							color: theme.palette.primary.main ?? '#00BCD4',
						}}
					>
						Forgot password?
					</Link>
				</Grid>
				<Grid item>
					<Link
						href={'/auth/signup'}
						style={{
							color: theme.palette.primary.main ?? '#00BCD4',
						}}
					>
						{"Don't have an account? Sign Up"}
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SigninForm;
