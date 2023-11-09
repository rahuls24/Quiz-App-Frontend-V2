import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppHeaderLabel from './AppHeaderLabel';
import PageIconMenu from './PageIconMenu';
import PageMenu from './PageMenu';
import SettingMenu from './SettingMenu';

/**
 * AppHeader Component
 *
 * This component renders the application header containing various menus and icons. It includes
 * an AppBar with a Container (maxWidth 'xl') and a Toolbar. Within the Toolbar, it renders the
 * AppHeaderLabel component, PageMenu, and SettingMenu components. The userRole prop is passed
 * to PageIconMenu and PageMenu components.
 *
 * @returns {JSX.Element} The rendered AppHeader component.
 */
function AppHeader() {
	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<AppHeaderLabel>
						<PageIconMenu userRole='examiner' />
					</AppHeaderLabel>
					<PageMenu userRole='examiner' />
					<SettingMenu />
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default AppHeader;
