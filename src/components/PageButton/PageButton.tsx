import { StyledPageButton } from './styles';

export const PageButton = ({ value, currentPage, onClick, ...props }: any) => (
    <li>
        <StyledPageButton
            color={currentPage === value ? 'primary' : 'inherit'}
            onClick={() => value !== currentPage && onClick(value)}
            {...props}
        />
    </li>
);
