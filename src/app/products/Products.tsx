import { Grid, InputAdornment, TextField } from '@mui/material';
import { useGetDataApi } from 'api/useGetDataApi';
import { AppBar } from 'components/AppBar/AppBar';
import { StyledHeaderFilters } from 'components/AppBar/styles';
import { CustomPagination } from 'components/CustomPagination/CustomPagination';
import { SearchIcon } from 'components/icons';
import { LayoutWrapper } from 'components/LayoutWrapper/LayoutWrapper';
import { Loader } from 'components/Loader/Loader';
import { ProductCard } from 'components/ProductCard/ProductCard';
import { debounce } from 'lodash';
import React, { useEffect, useMemo } from 'react';

const initListConfig = {
    params: {
        limit: 8,
        page: 1,
        search: ''
    }
};

export const Products = () => {
    const [{ data, isLoading, isError }, { params }, setConfig] = useGetDataApi('/products', initListConfig);

    const debouncedResults = useMemo(() => {
        const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setConfig({ params: { ...params, search: e.target.value } });
        };
        return debounce(handleChangeSearch, 300);
    }, [params, setConfig]);

    useEffect(
        () => () => {
            debouncedResults.cancel();
        },
        [debouncedResults]
    );

    return (
        <>
            <AppBar>
                <StyledHeaderFilters>
                    <TextField
                        sx={{ maxWidth: '392px' }}
                        fullWidth
                        name="search"
                        type="search"
                        onChange={debouncedResults}
                        placeholder="Search..."
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                </StyledHeaderFilters>
            </AppBar>
            <main>
                <LayoutWrapper>
                    {isError && <p>Error</p>}
                    {isLoading && <Loader />}
                    {data?.items.length > 0 && (
                        <>
                            <Grid container rowSpacing={4} columnSpacing={3} alignItems="stretch">
                                {data.items.map((product: any) => (
                                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                                        <ProductCard {...product} />
                                    </Grid>
                                ))}
                            </Grid>
                            <footer style={{ marginBlock: '56px' }}>
                                <CustomPagination
                                    count={data?.meta.totalPages}
                                    page={params.page}
                                    onChangePage={(page: number) => setConfig({ params: { ...params, page } })}
                                />
                            </footer>
                        </>
                    )}
                </LayoutWrapper>
            </main>
        </>
    );
};
