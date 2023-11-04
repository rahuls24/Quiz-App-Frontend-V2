import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: {
            main: '#00BCD4',
            light: '#B2EBF2',
            dark: '#0097A7',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#f50057',
          },
          text: {
            primary: '#212121',
            secondary: '#757575',
          },
          divider: '#BDBDBD',
        }
      : //   TODO: Implement dark design
        {
          primary: {
            main: '#00BCD4',
            light: '#B2EBF2',
            dark: '#0097A7',
            contrastText: '#FFFFFF',
          },
          secondary: {
            main: '#f50057',
          },
          text: {
            primary: '#212121',
            secondary: '#757575',
          },
          divider: '#BDBDBD',
        }),
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

const theme = createTheme(getDesignTokens('light'));
export default theme;
