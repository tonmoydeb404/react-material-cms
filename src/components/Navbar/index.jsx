import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import NavbarNotification from './NavbarNotification';
import NavbarTheme from './NavbarTheme';

const NavAppBar = styled(AppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open, drawerwidth }) => ({
    [theme.breakpoints.up('sm')]: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerwidth}px)`,
            marginLeft: `${drawerwidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    },
}));

const ToolbarStyled = styled(Toolbar)(() => ({
    display: 'flex',
}));

const NavbarBrand = styled(Link)(() => ({
    fontWeight: 'bold',
    color: '#FFF',
    textDecoration: 'none',
}));

const NavbarIcons = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginLeft: 'auto',
}));

const Navbar = ({ setSidebarStatus, sidebarStatus, drawerWidth }) => (
    <NavAppBar position="sticky" open={sidebarStatus} drawerwidth={drawerWidth}>
        <ToolbarStyled>
            <IconButton
                sx={{
                    color: 'text.primary',
                    backgroundColor: 'background.default',
                    borderRadius: '3px',
                    marginRight: '5px',
                    padding: '5px',
                    '&:hover': {
                        backgroundColor: 'background.default',
                    },
                }}
                onClick={() => setSidebarStatus((prevState) => !prevState)}
            >
                <Menu />
            </IconButton>

            <NavbarBrand to="/">
                <Typography variant="h6" component="h1">
                    CMS
                </Typography>
            </NavbarBrand>

            <NavbarIcons>
                <NavbarTheme />
                <NavbarNotification />
            </NavbarIcons>
        </ToolbarStyled>
    </NavAppBar>
);

export default Navbar;
