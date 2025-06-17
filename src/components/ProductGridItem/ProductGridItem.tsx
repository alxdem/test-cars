import Grid, {type GridProps} from '@mui/material/Grid';

export default function ProductGridItem({key, children}: GridProps) {
    return (
        <Grid
            key={key}
            size={{
                xl: 3,
                lg: 4,
                md: 6,
                sm: 12,
            }}
            sx={{display: 'flex'}}
        >
            {children}
        </Grid>
    );
}