import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AppTheme = createContext('light');
// useTheme
export const useAppTheme = () => useContext(AppTheme);

export const AppThemeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    // get saved theme in localStorage
    useEffect(() => {
        const localTheme = localStorage.getItem('react-material-cms-app-theme');
        const preferedTheme = ['dark', 'light'];
        // check local theme valid or not
        if (typeof localTheme === 'string' && preferedTheme.includes(localTheme)) {
            setThemeMode(localTheme);
        }
    }, []);

    // theme toggleing function
    const toggleTheme = () => {
        const toggledTheme = themeMode === 'light' ? 'dark' : 'light';
        setThemeMode(toggledTheme);
        localStorage.setItem('react-material-cms-app-theme', toggledTheme);
    };

    // memorize value
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => ({ themeMode, setThemeMode, toggleTheme }), [themeMode]);

    return <AppTheme.Provider value={value}>{children}</AppTheme.Provider>;
};
