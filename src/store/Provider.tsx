'use client';

import { setupStore } from './store';
import { Provider } from 'react-redux';

const store = setupStore();

/**
 * ReduxProvider Component
 *
 * This component provides a Redux store to its children using the `Provider` from `react-redux`.
 *
 * @param {Object} props - The props object.
 * @param {React.ReactNode} props.children - The child components to be rendered within the provider.
 * @returns {JSX.Element} The rendered ReduxProvider component.
 */
export default function ReduxProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <Provider store={store}>{children}</Provider>;
}
