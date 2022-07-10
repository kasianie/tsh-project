import { styled } from '@mui/material';

export const StyledHeader = styled('header')(({ theme }) => ({
    background: theme.palette.common.white,
    marginBottom: '56px'
}));

export const StyledHeaderContent = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBlock: '48px',
    flexWrap: 'wrap'
});

export const StyledHeaderFilters = styled('section')(({ theme }) => ({
    width: '100%',
    marginTop: '28px',
    [theme.breakpoints.up('md')]: {
        width: 'unset',
        flex: 1,
        order: 2,
        marginTop: 0
    }
}));

export const StyledHeaderLogo = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        marginRight: '105px',
        order: 1
    }
}));

export const StyledHeaderButtonWrapper = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        order: 3
    }
}));
