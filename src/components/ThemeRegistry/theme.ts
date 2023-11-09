import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { PaletteMode } from '@mui/material';

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin'],
	display: 'swap',
});

/**
 * getDesignTokens Function
 *
 * Generates design tokens for a given palette mode (light or dark).
 *
 * @param {PaletteMode} mode - The palette mode (either 'light' or 'dark').
 * @returns {Object} An object containing design tokens for the specified palette mode.
 */
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
			: {
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
