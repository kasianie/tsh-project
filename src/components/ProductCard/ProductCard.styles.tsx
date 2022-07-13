import { CardContent, styled } from '@mui/material';

export const StyledCardContent = styled(CardContent)({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
}) as typeof CardContent;

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

export const BottomCardSection = styled('section')({
    marginTop: '32px'
});
