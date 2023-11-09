import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import AppHeaderLabel from './AppHeaderLabel';
import PageIconMenu from './PageIconMenu';
import PageMenu from './PageMenu';
import SettingMenu from './SettingMenu';

function AppHeader() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppHeaderLabel>
            <PageIconMenu userRole="examiner" />
          </AppHeaderLabel>
          <PageMenu userRole="examiner" />
          <SettingMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
