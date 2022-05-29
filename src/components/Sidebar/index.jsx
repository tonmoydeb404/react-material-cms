import { Close, InboxOutlined, MailOutline } from '@mui/icons-material';
import {
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme
} from '@mui/material';
import React from 'react';

const Sidebar = ({ sidebarStatus, setSidebarStatus, drawerWidth }) => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Drawer
            open={sidebarStatus}
            onClose={() => setSidebarStatus(false)}
            variant={isSmallDevice ? 'temporary' : 'persistent'}
            anchor="left"
            sx={{
                width: sidebarStatus ? `${drawerWidth}px` : 0,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: sidebarStatus ? `${drawerWidth}px` : 0,
                    boxSizing: 'border-box',
                },
            }}
        >
            <List>
                {isSmallDevice ? (
                    <ListItem disablePadding>
                        <IconButton
                            onClick={() => setSidebarStatus(false)}
                            sx={{ marginLeft: 'auto', marginRight: '10px' }}
                            size="small"
                            color="error"
                        >
                            <Close />
                        </IconButton>
                    </ListItem>
                ) : null}
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxOutlined /> : <MailOutline />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
};

export default Sidebar;
