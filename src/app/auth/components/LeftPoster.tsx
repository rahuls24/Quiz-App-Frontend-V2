import Grid from '@mui/material/Grid';
const authBgcImg =
	'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

/**
 * LeftPoster Component
 *
 * This component renders a poster on the left side of the screen. It uses a Grid item with specific
 * screen size configurations (xs, sm, md) and applies a background image defined by `authBgcImg`.
 * The background image is set to cover the container and be centered.
 *
 * @returns {JSX.Element} The rendered LeftPoster component.
 */
function LeftPoster() {
	return (
		<Grid
			item
			xs={false}
			sm={4}
			md={7}
			sx={{
				backgroundImage: `url(${authBgcImg})`,
				backgroundRepeat: 'no-repeat',

				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		/>
	);
}

export default LeftPoster;
