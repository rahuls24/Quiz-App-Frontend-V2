'use client';

import { setupStore } from './store';
import { Provider } from 'react-redux';

const store = setupStore();
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
