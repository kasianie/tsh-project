import { ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

import { theme } from './themeConfig';

type ThemeProvidersProps = {
    children: ReactNode;
};

export const ThemeAppProvider = ({ children }: ThemeProvidersProps) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
