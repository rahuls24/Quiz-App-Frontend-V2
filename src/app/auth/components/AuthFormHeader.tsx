import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
/**
 * SigninFormHeader Component
 *
 * This component renders the header for the sign-in form. It includes an Avatar with a lock icon
 * and a Typography element displaying the text "Sign in".
 *
 * @returns {JSX.Element} The rendered SigninFormHeader component.
 */
function AuthFormHeader({ title }: { title: string }) {
	return (
		<>
			<Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography component='h1' variant='h5'>
				{title}
			</Typography>
		</>
	);
}

export default AuthFormHeader;
