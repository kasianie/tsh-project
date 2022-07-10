import { styled } from '@mui/material';

export const StyledPageButtonList = styled('ul')({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    '& > li:not(:last-of-type, :first-of-type)': {
        marginRight: '16px'
    },
    '& > li:first-of-type': {
        marginRight: '32px'
    },
    '& > li:last-of-type': {
        marginLeft: '32px'
    }
});
