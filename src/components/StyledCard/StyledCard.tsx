import { Card, styled } from '@mui/material';

export const StyledCard = styled(Card)({
    height: '100%',
    boxShadow: 'none',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative'
}) as typeof Card;
