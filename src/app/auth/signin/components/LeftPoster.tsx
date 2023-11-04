import Grid from '@mui/material/Grid';
const authBgcImg =
  'https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

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
