import { UserRole } from '@/types/userRelated';

export const pagesByRole: Record<
  UserRole,
  Array<{
    name: string;
    path: string;
  }>
> = {
  examiner: [
    { name: 'Live Quizzes', path: '/' },
    { name: 'Make a Quiz', path: '/quiz/make-a-quiz' },
  ],
  examinee: [
    { name: 'Live Quizzes', path: '/' },
    { name: 'Quizzes History', path: '/quiz/history' },
  ],
};
