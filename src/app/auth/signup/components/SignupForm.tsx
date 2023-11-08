'use client';
// Material-UI Icons
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// Material-UI Lab
import LoadingButton from '@mui/lab/LoadingButton';

// Material-UI Components
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';

// Material-UI hooks
import { useTheme } from '@mui/material';
// Next.js
import Link from 'next/link';

// React
import { useState } from 'react';

// Custom Hooks
import useEmailSignupForm from '../hooks/useEmailSignupForm';

/**
 * SignupForm Component
 *
 * This component renders a sign-up form that includes fields for name, email, password,
 * and a role selection. It also allows toggling password visibility. Users can sign up
 * for different roles, such as "Examinee" or "Examiner".
 *
 * @returns {JSX.Element} The rendered SignupForm component.
 */
function SignupForm() {
	const [shouldShowPassword, setShowPassword] = useState(false);
	const theme = useTheme();
	const { formik, isLoading } = useEmailSignupForm();
	const roleRadioBtns = (
		<FormControl fullWidth>
			<FormLabel id='role'>Role</FormLabel>
			<RadioGroup
				aria-labelledby='role-radio-buttons-group'
				name='role'
				id='role'
				value={formik.values.role}
				row
				sx={{ gap: 4 }}
				onChange={formik.handleChange}
			>
				<FormControlLabel
					value='examinee'
					control={<Radio />}
					label='Examinee'
				/>
				<FormControlLabel
					value='examiner'
					control={<Radio />}
					label='Examiner'
				/>
			</RadioGroup>
		</FormControl>
	);
	const endAdornmentForPassword = (
		<InputAdornment position='end'>
			<IconButton
				aria-label='toggle password visibility'
				onClick={() => setShowPassword(!shouldShowPassword)}
				onMouseDown={() => setShowPassword(!shouldShowPassword)}
				edge='end'
			>
				{shouldShowPassword ? <Visibility /> : <VisibilityOff />}
			</IconButton>
		</InputAdornment>
	);
	return (
		<Box component='form' onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
			<TextField
				margin='normal'
				fullWidth
				id='name'
				label='Name'
				name='name'
				autoComplete='name'
				value={formik.values.name}
				onChange={formik.handleChange}
				error={formik.touched.name && Boolean(formik.errors.name)}
				helperText={formik.touched.name && formik.errors.name}
			/>
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
					endAdornment: endAdornmentForPassword,
				}}
				autoComplete='current-password'
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
				type='submit'
				loadingPosition='end'
				fullWidth
				variant='contained'
				sx={{ mt: 3, mb: 2 }}
				endIcon={<ArrowRightIcon />}
			>
				Sign Up
			</LoadingButton>
			<Grid container>
				<Grid item xs></Grid>
				<Grid item>
					<Link
						href='/auth/signin'
						style={{
							color: theme.palette.primary.main ?? '#00BCD4',
						}}
					>
						{'Already have an account? Sign In'}
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
}

export default SignupForm;
