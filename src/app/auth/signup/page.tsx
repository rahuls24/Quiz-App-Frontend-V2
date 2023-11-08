import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import AuthFormHeader from '../components/AuthFormHeader';
import LeftPoster from '../components/LeftPoster';
import SignupForm from './components/SignupForm';

function Signup() {
  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <LeftPoster />
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
            <AuthFormHeader title="Signup" />
            <SignupForm />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
