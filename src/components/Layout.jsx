import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const drawerWidth = 240;

const Main = styled(Box, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    [theme.breakpoints.up('sm')]: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: 0,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: `${drawerWidth}px`,
        }),
    },
}));

const Layout = ({ children }) => {
    const [sidebarStatus, setSidebarStatus] = useState(false);

    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                color: 'text.primary',
                minHeight: '100vh',
            }}
        >
            {/* top Navbar */}
            <Navbar
                sidebarStatus={sidebarStatus}
                setSidebarStatus={setSidebarStatus}
                drawerWidth={drawerWidth}
            />
            {/* sidebar */}
            <Sidebar
                sidebarStatus={sidebarStatus}
                setSidebarStatus={setSidebarStatus}
                drawerWidth={drawerWidth}
            />
            {/* main content */}
            <Main open={sidebarStatus}>{children}</Main>
        </Box>
    );
};

export default Layout;
