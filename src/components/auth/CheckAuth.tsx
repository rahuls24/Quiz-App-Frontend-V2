'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';
import { selectIsLoggedIn } from '@/store/globalSlice';
function CheckAuth() {
  const router = useRouter();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) router.push('/auth/signin');
  }, [isLoggedIn, router]);
  return null;
}

export default CheckAuth;
