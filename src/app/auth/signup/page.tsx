// Material-UI Components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

// Custom Components
import AuthFormHeader from '../components/AuthFormHeader';
import LeftPoster from '../components/LeftPoster';

// Signup Form
import SignupForm from './components/SignupForm';

/**
 * Signup Component
 *
 * This component renders a sign-up page layout. It includes a LeftPoster component, a paper container
 * with a sign-up form, and a header for the form. The component uses Grid and Paper from Material-UI
 * for layout and styling. It also sets the height of the main container to 100vh (viewport height).
 *
 * @returns {JSX.Element} The rendered Signup component.
 */
function Signup() {
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
						my: 2,
						mx: 4,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}
				>
					<AuthFormHeader title='Signup' />
					<SignupForm />
				</Box>
			</Grid>
		</Grid>
	);
}

export default Signup;
