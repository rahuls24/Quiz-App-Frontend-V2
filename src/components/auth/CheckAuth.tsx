'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/globalSlice';

/**
 * CheckAuth Component
 *
 * This component checks if the user is authenticated. If not, it redirects them to the sign-in page.
 *
 * @returns {null} This component does not render any UI elements.
 */
function CheckAuth() {
	const router = useRouter();
	const isLoggedIn = useAppSelector(selectIsLoggedIn);

	useEffect(() => {
		if (!isLoggedIn) router.push('/auth/signin');
	}, [isLoggedIn, router]);
	return null;
}

export default CheckAuth;
