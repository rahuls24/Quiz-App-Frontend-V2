'use client';
// Next.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Material-UI Components
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// Types
import { UserRole } from '@/types/userRelated';

// Helper functions
import { getPagesCurrentUser } from '@/utils/appHeaderRelated';

// Component Props
type PageMenuProps = {
	userRole: UserRole;
};

/**
 * PageMenu Component
 *
 * This component renders a menu of pages based on the user's role. It uses the `getPagesCurrentUser`
 * function to retrieve the pages accessible to the current user. The menu items are displayed as
 * buttons, and the active page is highlighted with an underline style.
 *
 * @param {PageMenuProps} userRole - The role of the current user.
 * @returns {JSX.Element} The rendered PageMenu component.
 */
function PageMenu({ userRole }: PageMenuProps) {
	const pages = getPagesCurrentUser(userRole);
	const pathname = usePathname();
	return (
		<Box
			sx={{
				flexGrow: 1,
				display: { xs: 'none', md: 'flex' },
			}}
		>
			{pages.map((page) => (
				<Link
					href={page.path}
					style={{ textDecoration: 'none' }}
					key={page.path}
				>
					<Button
						sx={{
							m: 2,
							color: 'white',
							display: 'block',
							borderBottom:
								pathname === page.path
									? '1px solid #bdbdbd'
									: 'none',
						}}
					>
						{page.name}
					</Button>
				</Link>
			))}
		</Box>
	);
}

export default PageMenu;
