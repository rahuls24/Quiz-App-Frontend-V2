import { selectIsLoggedIn } from '@/store/globalSlice';
import { useAppSelector } from '@/store/hooks';

/**
 * useIsLoggedIn Hook
 *
 * This hook provides a way to check if a user is logged in. It utilizes the `useAppSelector`
 * function along with the `selectIsLoggedIn` selector to retrieve the current login status.
 *
 * @returns {boolean} A boolean indicating whether the user is logged in.
 */

export default function useIsLoggedIn() {
	return useAppSelector(selectIsLoggedIn);
}
