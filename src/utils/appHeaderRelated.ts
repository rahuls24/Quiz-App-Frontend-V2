import { UserRole } from '@/types/userRelated';

/**
 * getPagesCurrentUser Function
 *
 * Retrieves an array of pages accessible to the current user based on their role.
 *
 * @param {UserRole} role - The role of the current user (default is 'examiner').
 * @returns {Array<{ name: string, path: string }>} An array of page objects with names and paths.
 */
export function getPagesCurrentUser(role: UserRole = 'examiner') {
	if (role === 'examinee') {
		return [
			{ name: 'Live Quizzes', path: '/' },
			{ name: 'Quizzes History', path: '/quiz/history' },
		];
	}
	return [
		{ name: 'Live Quizzes', path: '/' },
		{ name: 'Make a Quiz', path: '/quiz/make-a-quiz' },
	];
}
