import {SearchParams} from '@/models';
import AppSelect from '@/components/AppSelect/AppSelect';
import {SELECT_SORT, PRODUCT_PARAMS} from '@/utils/variables';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {formatParams} from '@/utils/methods';
import ProductSection from '@/components/ProductSection/ProductSection';
import {Suspense} from 'react';

export default async function Home({searchParams}: {
    searchParams: SearchParams,
}) {
    const resolvedParams = await searchParams;

    const page = formatParams(resolvedParams[PRODUCT_PARAMS.page], '1');
    const sort = formatParams(resolvedParams[PRODUCT_PARAMS.sort], '');
    const order = formatParams(resolvedParams[PRODUCT_PARAMS.order],'asc');
    const productKey = `key-${page}-${sort}-${order}`;

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
                <Suspense fallback={<p>Загрузка...</p>}>
                    <ProductSection
                        key={productKey}
                        page={page}
                        sort={sort}
                        order={order}
                    />
                </Suspense>
            </Box>
        </Box>
    );
}
