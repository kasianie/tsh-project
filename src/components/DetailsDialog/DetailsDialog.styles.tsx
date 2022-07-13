import { IconButton, styled } from '@mui/material';

export const StyledDetailsContent = styled('div')(({ theme }) => ({
    padding: '24px',
    [theme.breakpoints.up('sm')]: {
        padding: '24px 32px 56px'
    }
}));

export const StyledIconButton = styled(IconButton)({
    position: 'absolute',
    right: '16px',
    top: '16px'
}) as typeof IconButton;
