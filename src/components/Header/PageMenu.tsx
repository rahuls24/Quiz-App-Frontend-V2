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
        <Link href={page.path} style={{ textDecoration: 'none' }} key={page.path}>
          <Button
            sx={{
              m: 2,
              color: 'white',
              display: 'block',
              borderBottom:
                pathname === page.path ? '1px solid #bdbdbd' : 'none',
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
