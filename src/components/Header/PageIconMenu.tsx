'use client';
// Next.js
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// React
import { useState } from 'react';

// Material-UI Components
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';

// Material-UI Icons
import MenuIcon from '@mui/icons-material/Menu';

// Types and Utilities
import { UserRole } from '@/types/userRelated';
import { getPagesCurrentUser } from '@/utils/appHeaderRelated';

type PageIconMenuTypes = {
  userRole: UserRole;
};
/**
 * PageIconMenu Component
 *
 * This component renders an icon-based menu for navigating pages. It includes an IconButton with a MenuIcon
 * which, when clicked, opens a Menu with links to different pages. The component provides handlers for
 * opening and closing the menu, as well as for handling menu item clicks. The menu items are determined
 * based on the user's role.
 *
 * @param {PageIconMenuTypes} userRole - The role of the current user.
 * @returns {JSX.Element} The rendered PageIconMenu component.
 */
function PageIconMenu({ userRole }: PageIconMenuTypes) {
  const menuItems = getPagesCurrentUser(userRole);
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  /**
   * handleOpenNavMenu Function
   *
   * Handles the opening of a navigation menu by setting the anchor element.
   *
   * @param {React.MouseEvent<HTMLElement>} event - The mouse event that triggered the opening of the menu.
   */
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  /**
   * handleCloseNavMenu Function
   *
   * Handles the closing of a navigation menu by resetting the anchor element.
   */
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'flex', md: 'none' },
      }}
    >
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {menuItems.map((menu) => (
          <Link
            href={menu.path}
            style={{ textDecoration: 'none' }}
            key={menu.path}
          >
            <MenuItem
              onClick={() => {
                handleCloseNavMenu();
              }}
              selected={pathname === menu.path}
            >
              <Typography textAlign="center">{menu.name}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
}

export default PageIconMenu;
