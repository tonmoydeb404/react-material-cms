import { createTheme } from '@mui/material';

const theme = (mode = 'light') =>
    createTheme({
        palette: {
            mode,
        },
    });

export default theme;
