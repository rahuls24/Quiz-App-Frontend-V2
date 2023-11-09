import { UserRole } from '@/types/userRelated';

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
