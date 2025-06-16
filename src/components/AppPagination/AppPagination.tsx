'use client';

import Pagination from '@mui/material/Pagination';
import type {PaginationProps} from '@mui/material/Pagination';
import useRoute from '@/hooks/useRoute';
import {useEffect, useState} from 'react';
import {OnPageChange} from '@/models';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function AppPagination({count, page}: PaginationProps) {
    const isMobile = useMediaQuery('(max-width:600px)');
    const {pageChange} = useRoute();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onPageChange: OnPageChange = (e, value) => {
        setIsLoading(true);
        pageChange(e, value)
    };

    useEffect(() => {
        setIsLoading(false);
    }, [page, count]);

    return (
        <Pagination
            sx={{
                mx: {
                    xs: 'auto',
                }
            }}
            variant='outlined'
            shape='rounded'
            count={count}
            page={page}
            disabled={isLoading}
            siblingCount={isMobile ? 0 : 1}
            boundaryCount={1}
            onChange={onPageChange}
        />
    );
}