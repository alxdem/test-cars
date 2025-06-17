import Box, {type BoxProps} from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function ProductGrid({children}: BoxProps) {
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
                {children}
            </Grid>
        </Box>
    );
}