import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import { useAppTheme } from './context/AppThemeContext';
import AppRoutes from './routes/AppRoutes';
import './styles/App.css';
import theme from './theme';

function App() {
    const { themeMode } = useAppTheme();
    const myTheme = theme(themeMode);

    return (
        <BrowserRouter>
            <ThemeProvider theme={myTheme}>
                <Layout>
                    <AppRoutes />
                </Layout>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
