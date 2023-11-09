'use client';
import { UserRole } from '@/types/userRelated';
import { getPagesCurrentUser } from '@/utils/appHeaderRelated';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MouseEvent as ReactMouseEvent, useState } from 'react';
type PageIconMenuTypes = {
  userRole: UserRole;
};
function PageIconMenu({ userRole }: PageIconMenuTypes) {
  const menuItems = getPagesCurrentUser();
  const pathname = usePathname();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: ReactMouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

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
          <Link href={menu.path} style={{ textDecoration: 'none' }}>
            <MenuItem
              key={menu.path}
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
