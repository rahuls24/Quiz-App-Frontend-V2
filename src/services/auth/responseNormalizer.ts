import { SOMETHING_WENT_WRONG } from '@/constants/errors';

export function normalizeSigninWithEmailSuccessRes(rawResponse: any) {
  if ('token' in rawResponse) {
    return String(rawResponse.token);
  }
  return 'token is not provided by backend';
}
export function normalizeSigninWithEmailErrorRes(rawResponse: any) {
  if ('error' in rawResponse) {
    if (typeof rawResponse.error === 'string') {
      return rawResponse.error;
    }
  }
  return SOMETHING_WENT_WRONG;
}
