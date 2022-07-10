import { styled } from '@mui/material';
import { maxWidthPageContent, paddingPage } from 'theme/designTokens';

export const MainWrapper = styled('div')({
    padding: paddingPage
});

export const ContentWrapper = styled('div')({
    maxWidth: maxWidthPageContent,
    margin: '0 auto'
});
