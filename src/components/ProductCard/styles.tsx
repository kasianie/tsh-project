import { styled } from '@mui/material';

export const StyledCardLabel = styled('span')(({ theme }) => ({
    display: 'inline-block',
    background: theme.palette.secondary.main,
    padding: '4px 16px',
    color: theme.palette.common.white,
    position: 'absolute',
    top: '16px',
    left: 0,
    ...theme.typography.body2
}));
