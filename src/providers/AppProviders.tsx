import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeAppProvider } from 'theme/ThemeAppProvider';
import { CssBaseline } from '@mui/material';

import { AppProvidersProps } from './AppProviders.types';

export const AppProviders = ({ children }: AppProvidersProps) => (
    <ThemeAppProvider>
        <CssBaseline />
        <Router>{children}</Router>
    </ThemeAppProvider>
);
