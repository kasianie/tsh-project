import { PageButton } from 'components/PageButton/PageButton';
import React, { useEffect } from 'react';
import { StyledPageButtonList } from './styles';

type CustomPaginationProps = {
    count: number;
    page: number;
    onChangePage: (value: number) => void;
};

const Pagination = ({ count, page, onChangePage }: CustomPaginationProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <nav>
            <StyledPageButtonList>
                <PageButton value={1} currentPage={page} onClick={onChangePage} disabled={page === 1}>
                    First
                </PageButton>
                {count <= 6 ? (
                    [...Array.from(Array(count).keys())].map(number => (
                        <PageButton key={number} value={number + 1} currentPage={page} onClick={onChangePage}>
                            {number + 1}
                        </PageButton>
                    ))
                ) : (
                    <>
                        {page === 1 &&
                            [1, 2, 3].map(number => (
                                <PageButton key={number} value={number} currentPage={page} onClick={onChangePage}>
                                    {number}
                                </PageButton>
                            ))}
                        {page >= 2 &&
                            page < count - 4 &&
                            [page - 1, page, page + 1].map(number => (
                                <PageButton key={number} value={number} currentPage={page} onClick={onChangePage}>
                                    {number}
                                </PageButton>
                            ))}
                        {count > 6 && <li>...</li>}
                        {page >= count - 4 &&
                            [count - 5, count - 4, count - 3].map(number => (
                                <PageButton key={number} value={number} currentPage={page} onClick={onChangePage}>
                                    {number}
                                </PageButton>
                            ))}
                        {[count - 2, count - 1, count].map(number => (
                            <PageButton key={number} value={number} currentPage={page} onClick={onChangePage}>
                                {number}
                            </PageButton>
                        ))}
                    </>
                )}
                <PageButton value={count} currentPage={page} onClick={onChangePage} disabled={page === count}>
                    Last
                </PageButton>
            </StyledPageButtonList>
        </nav>
    );
};

const checkPropsEqual = (prev: CustomPaginationProps, next: CustomPaginationProps) =>
    prev.page === next.page && prev.count === next.count;

export const CustomPagination = React.memo<CustomPaginationProps>(Pagination, checkPropsEqual);
