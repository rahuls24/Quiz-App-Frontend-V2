import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
function SigninFormHeader() {
	return (
		<>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component='h1' variant='h5'>
				Sign in
			</Typography>
		</>
	);
}

export default SigninFormHeader;
