import { styled, keyframes } from '@mui/system';

export const loaderRotate = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});

export const StyledLoader = styled('span')({
    display: 'inline-block',
    width: '60px',
    height: '60px',
    animation: `${loaderRotate} 1s infinite linear`
});

export const StyledLoaderWrapper = styled('div')(({ theme }) => ({
    background: theme.palette.background.overlay,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: '25vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 2,
    [theme.breakpoints.up('sm')]: {
        alignItems: 'center',
        paddingTop: 0
    }
}));
