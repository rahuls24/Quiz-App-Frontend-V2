import { pagesByRole } from '@/constants/userRelated';
import { Page, UserRole } from '@/types/userRelated';
import { fromNullable, map, getOrElse } from 'fp-ts/lib/Option';
import { pipe } from 'fp-ts/lib/function';

/**
 * Retrieves pages for the current user based on their role.
 * @param {UserRole} role - The role of the user. Defaults to 'examiner'.
 * @returns {Array<Page>} - An array of pages available to the user.
 */
export function getPagesCurrentUser(role: UserRole = 'examiner') {
  return pipe(
    fromNullable(pagesByRole[role]),
    map((pages) => [...pages]),
    getOrElse(() => [] as Array<Page>)
  );
}
