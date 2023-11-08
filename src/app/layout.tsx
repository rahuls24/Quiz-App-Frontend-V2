import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import ReduxProvider from '@/store/Provider';
import ToastProvider from '@/components/react-toastify/ToastProvider';

export const metadata: Metadata = {
	title: 'Quiz',
	description: 'A Simple Quiz app for examiners and examinees. ',
};

/**
 * RootLayout Component
 *
 * This component represents the root layout of the application. It sets the HTML language to English,
 * and wraps the children components in providers such as ThemeRegistry, ReduxProvider, and ToastProvider.
 * These providers are responsible for managing the theme, Redux store, and displaying toasts respectively.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered RootLayout component.
 */
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<ThemeRegistry>
					<ReduxProvider>
						<ToastProvider>{children}</ToastProvider>
					</ReduxProvider>
				</ThemeRegistry>
			</body>
		</html>
	);
}
