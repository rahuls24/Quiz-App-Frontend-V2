'use client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * ToastProvider Component
 *
 * This component provides a toast notification container to display notifications in the application.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 * @returns {JSX.Element} The rendered ToastProvider component.
 */
export default function ToastProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			{children}
			<ToastContainer />
		</>
	);
}
