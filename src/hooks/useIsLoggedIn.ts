import { selectIsLoggedIn } from '@/store/globalSlice';
import { useAppSelector } from '@/store/hooks';

export default function useIsLoggedIn() {
  return useAppSelector(selectIsLoggedIn);
}
