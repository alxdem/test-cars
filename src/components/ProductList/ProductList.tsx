import Grid from '@mui/material/Grid';
import ProductCard from '@/components/ProductCard/ProductCard';
import Box from '@mui/material/Box';
import type {ProductListProps} from '@/components/ProductList/ProductList.props';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProductList({products}: ProductListProps) {
    if (!products) {
        return (
            <CircularProgress sx={{
                mx: 'auto',
                my: 4,
            }} />
        );
    }


    return (
        <Box sx={{
            flexGrow: 1,
            maxWidth: {
                md: '100%',
                sm: 650,
            },
            mx: {
                md: 0,
                sm: 'auto'
            }
        }}>
            <Grid container spacing={2}>
                {products.map((product, index) => {
                    const {images, ...otherProps} = product;
                    const image = images.image[0] || '';
                    const isPriority = index <= 3;

                    return (
                        <Grid
                            key={product.unique_id}
                            size={{
                                xl: 3,
                                lg: 4,
                                md: 6,
                                sm: 12,
                            }}
                            sx={{display: 'flex'}}
                        >
                            <ProductCard
                                image={image}
                                isPriority={isPriority}
                                {...otherProps}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
}