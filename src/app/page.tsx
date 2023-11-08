'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/globalSlice';

/**
 * HomePage Component
 *
 * This component represents the home page of the application. It checks if the user is logged in,
 * and if not, it redirects them to the sign-in page. If the user is logged in, it displays a greeting
 * message with the text "Rahul".
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */
export default function HomePage() {
	const router = useRouter();
	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) router.push('/auth/signin');
	}, [isLoggedIn, router]);
	return (
		<>
			<h1>Rahul</h1>
		</>
	);
}
