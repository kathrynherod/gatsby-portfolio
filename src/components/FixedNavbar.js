import * as React from 'react';
import Resume from '../../static/KathrynHerod_FEE_22.pdf'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ModeSwitch from './ModeSwitch';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;
const navLinks = [
    {
        displayName: 'Resume',
        target: '_blank',
        url: Resume,
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

function FixedNavbar({ currentTheme, theme, updateCurrentTheme, window }) {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const container = window !== undefined ? () => window().document.body : undefined;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>KH</Typography>
            <Divider />
            <List>
                {navLinks.map(({ displayName, target, url }) => (
                    <ListItem key={displayName} disablePadding>
                        <Link key={displayName} href={url} target={target}
                            sx={{
                                color: theme.colors.link.text,
                            }}
                        >
                            {displayName}
                        </Link>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar component="nav" sx={{ background: theme.colors.nav }}>
                <Toolbar sx={{
                    display: 'flex',
                    flexDirection: { xs: 'row-reverse', sm: 'row' },
                    justifyContent: 'space-between',
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' }}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ display: { sm: 'block' } }}
                    >
                        KH
                    </Typography>

                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        {navLinks.map(({ displayName, target, url }) => (
                            <Link key={displayName} href={url} target={target}
                                sx={{
                                    color: theme.colors.link.text,
                                    padding: theme.space[4],
                                    textDecoration: 'none',
                                }}
                            >
                                {displayName}
                            </Link>
                        ))}
                    </Box>
                    <ModeSwitch currentTheme={currentTheme} updateTheme={updateCurrentTheme} />
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
        </>
    );
}

export default FixedNavbar;