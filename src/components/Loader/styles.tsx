import { styled, keyframes } from '@mui/system';

export const loaderRotate = keyframes({
    '0%': {
        transform: 'rotate(0deg)'
    },
    '100%': {
        transform: 'rotate(360deg)'
    }
});

export const StyledLoaderWrapper = styled('span')({
    display: 'inline-block',
    width: '60px',
    height: '60px',
    animation: `${loaderRotate} 1s infinite linear`
});
