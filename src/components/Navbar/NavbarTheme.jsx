import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import { useAppTheme } from '../../context/AppThemeContext';

const NavbarTheme = () => {
    const { themeMode, toggleTheme } = useAppTheme();

    return (
        <IconButton onClick={toggleTheme} color={themeMode === 'light' ? 'default' : 'info'}>
            {themeMode === 'light' ? <DarkMode /> : <LightMode />}
        </IconButton>
    );
};

export default NavbarTheme;
