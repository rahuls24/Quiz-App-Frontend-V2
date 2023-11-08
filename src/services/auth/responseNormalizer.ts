import { SOMETHING_WENT_WRONG } from '@/constants/errors';

/**
 * normalizeSigninWithEmailSuccessRes Function
 *
 * Normalizes a success response from a sign-in with email API call.
 *
 * @param {unknown} rawResponse - The raw response from the API call.
 * @returns {string} The extracted token or an error message if not provided by the backend.
 */
export function normalizeSigninWithEmailSuccessRes(
  rawResponse: unknown
): string {
  if (
    typeof rawResponse === 'object' &&
    rawResponse !== null &&
    !Array.isArray(rawResponse) &&
    'token' in (rawResponse as Record<string, unknown>)
  ) {
    return String((rawResponse as Record<string, unknown>).token);
  }
  return 'token is not provided by backend';
}

/**
 * normalizeSigninWithEmailErrorRes Function
 *
 * Normalizes an error response from a sign-in with email API call.
 *
 * @param {unknown} rawResponse - The raw response from the API call.
 * @returns {string} The extracted error message or a default error message if not provided by the backend.
 */
export function normalizeAuthWithEmailErrorRes(rawResponse: unknown): string {
  if (
    typeof rawResponse === 'object' &&
    rawResponse !== null &&
    !Array.isArray(rawResponse) &&
    'error' in (rawResponse as Record<string, unknown>)
  ) {
    if (typeof (rawResponse as Record<string, unknown>).error === 'string') {
      return String((rawResponse as Record<string, unknown>).error);
    }
  }
  return SOMETHING_WENT_WRONG;
}
