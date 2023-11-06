import { SOMETHING_WENT_WRONG } from '@/constants/errors';

export function normalizeSigninWithEmailSuccessRes(rawResponse: unknown) {
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

export function normalizeSigninWithEmailErrorRes(rawResponse: unknown) {
  if (
    typeof rawResponse === 'object' &&
    rawResponse !== null &&
    !Array.isArray(rawResponse) &&
    'error' in (rawResponse as Record<string, unknown>)
  ) {
    if (typeof (rawResponse as Record<string, unknown>).error === 'string') {
      return (rawResponse as Record<string, unknown>).error;
    }
  }
  return SOMETHING_WENT_WRONG;
}
