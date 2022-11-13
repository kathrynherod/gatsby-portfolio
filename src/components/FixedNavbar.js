import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const drawerWidth = 240;
const navLinks = [
    {
        displayName: 'Resume',
        target: '_blank',
        url: '',
    }, {
        displayName: 'About',
        target: '_self',
        url: '/#about',
    }, {
        displayName: 'Work',
        target: '_self',
        url: '/#work',
    }, {
        displayName: 'Projects',
        target: '_self',
        url: '/#projects',
    }
]

function FixedNavbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KH
      </Typography>
      <Divider />
      <List>
        {navLinks.map(({ displayName, url }) => (
          <ListItem key={displayName} disablePadding>

            <Link key={displayName} href={url} sx={{ color: '#fff' }}>
                {displayName}
              </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar sx={{
            display: 'flex',
            flexDirection: { xs: 'row-reverse', sm: 'row' }
        }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, justifyContent: "space-between" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            KH
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navLinks.map(({ displayName, url }) => (
              <Link key={displayName} href={url} sx={{ color: '#fff' }}>
                {displayName}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
    </>
  );
}

export default FixedNavbar;