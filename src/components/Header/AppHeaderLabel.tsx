import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';

type AppHeaderLabelProps = {
  children: React.ReactNode;
};

/**
 * AppHeaderLabel Component
 *
 * This component renders a label in the application header. It includes an icon (AdbIcon) and a
 * Typography component displaying the text "Quiz". The component is responsive, displaying different
 * elements based on screen size (xs for mobile, md for desktop). It also accepts children elements
 * for additional customization.
 *
 * @param {AppHeaderLabelProps} props - The props object.
 * @param {React.ReactNode} props.children - Additional child elements to be rendered along with the label.
 * @returns {JSX.Element} The rendered AppHeaderLabel component.
 */
function AppHeaderLabel({ children }: AppHeaderLabelProps) {
  return (
    <>
      <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Quiz
      </Typography>

      {children}
      <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Quiz
      </Typography>
    </>
  );
}

export default AppHeaderLabel;
