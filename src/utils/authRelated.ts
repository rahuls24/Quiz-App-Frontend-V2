import { pipe } from 'fp-ts/lib/function';
import { fromNullable, map, getOrElse } from 'fp-ts/Option';
import { lookup } from 'fp-ts/Array';
import { split } from 'fp-ts/string';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { UserDetails, UserRole } from '@/types/userRelated';
import { ReadonlyNonEmptyArray } from 'fp-ts/lib/ReadonlyNonEmptyArray';

/**
 * getUserDetailsFromToken Function
 *
 * Extracts user details from a bearer token string. It decodes the JWT token and returns the user details
 * including name, email, role, and verification status.
 *
 * @param {string} bearerToken - The bearer token string containing user information.
 * @returns {UserDetails} The user details extracted from the token.
 */
export function getUserDetailsFromToken(bearerToken: string): UserDetails {
  try {
    return pipe(
      bearerToken,
      split(' '),
      (arr: ReadonlyNonEmptyArray<string>) => Array.from(arr),
      lookup(1),
      getOrElse(() => ''),
      // eslint-disable-next-line
      jwtDecode as (token: string) => (JwtPayload & { data: unknown }) | null,
      decodeUserDetails,
      fromNullable,
      map((details) => ({
        name: String(details?.name),
        email: String(details?.email),
        role: pipe(details?.role, String, giveTypeToRawRole),
        isVerified: Boolean(details?.isVerified),
      })),
      getOrElse(
        (): UserDetails => ({
          name: '',
          email: '',
          role: giveTypeToRawRole('examiner'),
          isVerified: false,
        })
      )
    );
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return {
      name: '',
      email: '',
      role: giveTypeToRawRole('examiner'),
      isVerified: false,
    };
  }
  // helper function
  /**
   * decodeUserDetails Function
   *
   * Decodes user details from a JWT payload, ensuring that the data is in the expected format.
   *
   * @param {(JwtPayload & { data: unknown }) | null} details - The JWT payload containing user data.
   * @throws {Error} Throws an error if the payload format is unexpected.
   * @returns {UserDetails} The decoded user details.
   */
  function decodeUserDetails(
    details: (JwtPayload & { data: unknown }) | null
  ): UserDetails {
    if (
      details?.data &&
      typeof details.data === 'object' &&
      !Array.isArray(details.data)
    ) {
      return details.data as UserDetails;
    } else {
      throw new Error('Unexpected JWT payload format');
    }
  }
}

/**
 * giveTypeToRawRole Function
 *
 * Converts a raw role string to a strongly-typed UserRole.
 *
 * @param {string} role - The raw role string.
 * @returns {UserRole} The strongly-typed UserRole.
 */
export function giveTypeToRawRole(role: string): UserRole {
  if (role === 'examinee') return 'examinee';
  return 'examiner';
}
