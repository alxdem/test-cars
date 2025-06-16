import {Product, SearchParams} from '@/models';
import getData from '@/lib/getData';
import AppSelect from '@/components/AppSelect/AppSelect';
import {SELECT_SORT, PRODUCT_PARAMS} from '@/utils/variables';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ProductList from '@/components/ProductList/ProductList';
import AppPagination from '@/components/AppPagination/AppPagination';

export default async function Home({searchParams}: {
    searchParams: SearchParams,
}) {
    const urlParams = await searchParams;

    const data = await getData({
        page: urlParams[PRODUCT_PARAMS.page] ?? '1',
        sort: urlParams[PRODUCT_PARAMS.sort] ?? '',
        order: urlParams[PRODUCT_PARAMS.order] ?? 'asc',
    });

    const products: Product[] = data.data || [];
    const {page, last_page} = data.meta || {};

    return (
        <Box
            className="min-h-screen font-[family-name:var(--font-geist-sans)]"
            sx={{
                py: {
                    md: 5,
                    sm: 2,
                },
                px: {
                    xl: 20,
                    lg: 10,
                    md: 10,
                    sm: 5,
                    xs: 2,
                },
            }}
        >
            <Box
                component='main'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    maxWidth: '1600px',
                    mx: 'auto',
                }}
            >
                <Paper
                    elevation={1}
                    sx={{
                        p: 2,
                        display: 'flex',
                        justifyContent: {
                            sm: 'flex-end',
                            xs: 'stretch'
                        }
                    }}
                >
                    <AppSelect
                        label='Сортировка'
                        id='sort'
                        items={SELECT_SORT}
                    />
                </Paper>
                <ProductList products={products}/>
                <AppPagination
                    count={last_page}
                    page={page}
                />
            </Box>
        </Box>
    );
}
