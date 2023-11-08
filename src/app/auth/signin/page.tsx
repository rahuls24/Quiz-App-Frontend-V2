// MUI Material
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Local Components
import AuthFormHeader from '../components/AuthFormHeader';
import LeftPoster from '../components/LeftPoster';
import SigninForm from './components/SigninForm';

/**
 * Signin Component
 *
 * This component renders a sign-in page layout. It includes a LeftPoster component, a paper container
 * with a sign-in form, and a header for the form. The component uses Grid and Paper from Material-UI
 * for layout and styling. It also sets the height of the main container to 100vh (viewport height).
 *
 * @returns {JSX.Element} The rendered Signin component.
 */
export default function Signin() {
	return (
		<Grid container component='main' sx={{ height: '100vh' }}>
			<CssBaseline />
			<LeftPoster />
			<Grid
				item
				xs={12}
				sm={8}
				md={5}
				component={Paper}
				elevation={6}
				square
			>
				<Box
					sx={{
						my: 8,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<AuthFormHeader title='Signin' />
					<SigninForm />
				</Box>
			</Grid>
		</Grid>
	);
}
