import React, { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { FormControlLabel, Grid } from '@mui/material';
import { ApiUrl } from 'api/ApiUrl.enum';
import { useGetDataApi } from 'api/useGetDataApi';
import { AppBar } from 'components/AppBar/AppBar';
import { StyledHeaderFilters } from 'components/AppBar/AppBar.styles';
import { Checkbox } from 'components/Checkbox/Checkbox';
import { CustomPagination } from 'components/CustomPagination/CustomPagination';
import { LayoutWrapper } from 'components/LayoutWrapper/LayoutWrapper';
import { ListStateInfo } from 'components/ListStateInfo/ListStateInfo';
import { Loader } from 'components/Loader/Loader';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { StyledFormGroup, StyledListWrapper, StyledPaginationWrapper } from './Products.styles';
import { ProductItem, ProductListResponseData } from './Products.types';
import { initListConfig } from './initConfig';
import { DetailsDialog } from 'components/DetailsDialog/DetailsDialog';

export const Products = () => {
    const [data, { isLoading, isError }, { params }, getList] = useGetDataApi<ProductListResponseData>(
        ApiUrl.PRODUCTS,
        initListConfig
    );

    const [detailsDialog, setDetailsDialog] = useState<ProductItem | null>(null);

    const handleShowDetails = (product: ProductItem) => setDetailsDialog(product);

    const handleChangeActive = () => {
        getList({
            params: { ...params, active: !params.active === false ? null : true, page: 1 }
        });
    };

    const handleChangePromo = () => {
        getList({
            params: { ...params, promo: !params.promo === false ? null : true, page: 1 }
        });
    };

    const handleChangePage = (page: number) => getList({ params: { ...params, page } });

    const handleDebouncedSearch = useMemo(() => {
        const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            getList({ params: { ...params, search: e.target.value, page: 1 } });
        };
        return debounce(handleChangeSearch, 300);
    }, [params, getList]);

    useEffect(
        () => () => {
            handleDebouncedSearch.cancel();
        },
        [handleDebouncedSearch]
    );

    return (
        <>
            <AppBar>
                <StyledHeaderFilters>
                    <SearchInput onChange={handleDebouncedSearch} />
                    <StyledFormGroup>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Active"
                            checked={!!params.active}
                            onChange={handleChangeActive}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Promo"
                            checked={params.promo === null ? false : true}
                            onChange={handleChangePromo}
                        />
                    </StyledFormGroup>
                </StyledHeaderFilters>
            </AppBar>
            <main>
                <LayoutWrapper>
                    {data && data.items.length > 0 && (
                        <StyledListWrapper>
                            <Grid container rowSpacing={4} columnSpacing={3} alignItems="stretch">
                                {data.items.map((product: ProductItem) => (
                                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                        <ProductCard {...product} onClick={() => handleShowDetails(product)} />
                                    </Grid>
                                ))}
                            </Grid>
                            <StyledPaginationWrapper>
                                <CustomPagination
                                    count={data.meta.totalPages}
                                    page={params.page}
                                    onChangePage={handleChangePage}
                                />
                            </StyledPaginationWrapper>
                        </StyledListWrapper>
                    )}
                    {(isError || data?.items.length === 0) && <ListStateInfo error={isError} />}
                    {isLoading && <Loader />}
                    {detailsDialog && <DetailsDialog {...detailsDialog} onClose={() => setDetailsDialog(null)} />}
                </LayoutWrapper>
            </main>
        </>
    );
};
