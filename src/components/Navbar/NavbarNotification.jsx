import { Notifications } from '@mui/icons-material';
import { Badge, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';

const NavbarNotification = () => {
    const [ancorElement, setAncorElement] = useState(null);
    const open = Boolean(ancorElement);

    const handleClick = (e) => setAncorElement(e.currentTarget);
    const handleClose = () => setAncorElement(null);

    return (
        <>
            <IconButton onClick={handleClick}>
                <Badge badgeContent={5} color="error">
                    <Notifications />
                </Badge>
            </IconButton>

            <Menu id="basic-menu" anchorEl={ancorElement} open={open} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </>
    );
};

export default NavbarNotification;
