import { ButtonProps } from '@mui/material';

export interface PageButtonProps extends ButtonProps {
    value: number;
    currentPage: number;
    handleClick: (value: number) => void;
}
