import React from 'react';
import { AppThemeProvider } from './AppThemeContext';

const AppContext = ({ children }) => <AppThemeProvider>{children}</AppThemeProvider>;

export default AppContext;
