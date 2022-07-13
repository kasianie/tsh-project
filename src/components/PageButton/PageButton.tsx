import { StyledPageButton } from './PageButton.styles';
import { PageButtonProps } from './PageButton.types';

export const PageButton = ({ value, currentPage, handleClick, ...props }: PageButtonProps) => (
    <li>
        <StyledPageButton
            {...props}
            color={currentPage === value ? 'primary' : 'inherit'}
            onClick={() => value !== currentPage && handleClick(value)}
        />
    </li>
);
