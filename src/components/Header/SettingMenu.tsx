'use client';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {
	MouseEvent as ReactMouseEvent,
	useEffect,
	useMemo,
	useState,
} from 'react';

const settings = ['Profile', 'Logout'];

function SettingMenu() {
	const userFullName = 'Rahul Kumar';
	const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: ReactMouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};
	const settingsHandler = (settingKey: string) => {};
	return (
		<Box sx={{ flexGrow: 0 }}>
			<Tooltip title='Open settings'>
				<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
					<Avatar {...stringAvatar(userFullName)} />
				</IconButton>
			</Tooltip>
			<Menu
				sx={{ mt: '45px' }}
				id='menu-appbar'
				anchorEl={anchorElUser}
				anchorOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
			>
				{settings.map((setting) => (
					<MenuItem
						key={setting}
						onClick={() => settingsHandler(setting)}
						disabled={setting === 'Profile'}
					>
						<Typography textAlign='center'>{setting}</Typography>
					</MenuItem>
				))}
			</Menu>
		</Box>
	);
}

export default SettingMenu;

// Helper functions
/**
 * stringToColor Function
 *
 * Generates a color code based on the input string.
 *
 * @param {string} string - The input string.
 * @returns {string} The generated color code in hexadecimal format.
 */
function stringToColor(string: string) {
	let hash = 0;
	let i;

	/* eslint-disable no-bitwise */
	for (i = 0; i < string.length; i += 1) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash);
	}

	let color = '#';

	for (i = 0; i < 3; i += 1) {
		const value = (hash >> (i * 8)) & 0xff;
		color += `00${value.toString(16)}`.slice(-2);
	}
	/* eslint-enable no-bitwise */

	return color;
}

/**
 * stringAvatar Function
 *
 * Generates an avatar configuration object based on a name string.
 *
 * @param {string} name - The name string.
 * @returns {Object} An object with properties for styling the avatar.
 *   @property {Object} sx - The style object with a background color based on the name.
 *   @property {string} children - The initials of the first and last names.
 */
function stringAvatar(name: string) {
	const [firstName = ' ', lastName = ' '] = name
		.split(' ')
		.map((e) => e.toUpperCase());

	return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${firstName[0]}${lastName[0]}`,
	};
}
