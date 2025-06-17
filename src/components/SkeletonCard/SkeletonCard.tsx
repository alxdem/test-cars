import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function SkeletonCard() {
    return (
        <Box sx={{
            flexGrow: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Skeleton />
            <Skeleton animation='wave' />
            <Skeleton animation={false} />
        </Box>
    );
}