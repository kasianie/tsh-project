import { FormGroup, styled } from '@mui/material';

export const StyledListWrapper = styled('div')({
    position: 'relative',
    minHeight: '500px'
});

export const StyledPaginationWrapper = styled('div')({
    marginBlock: '56px'
});

export const StyledFormGroup = styled(FormGroup)(({ theme }) => ({
    flexDirection: 'row',
    flexWrap: 'nowrap',
    marginTop: '24px',
    [theme.breakpoints.up('md')]: {
        marginTop: 0,
        marginLeft: '24px'
    }
})) as typeof FormGroup;
