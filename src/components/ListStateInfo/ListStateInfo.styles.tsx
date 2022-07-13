import { styled, Typography } from '@mui/material';

export const StyledListStateInfo = styled('div')(({ theme }) => ({
    margin: '0 auto',
    maxWidth: '600px',
    background: theme.palette.common.white,
    padding: '118px 24px',
    textAlign: 'center'
}));

export const StyledTitle = styled(Typography)({
    marginTop: '22px',
    marginBottom: '8px'
}) as typeof Typography;
