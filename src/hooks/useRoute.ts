import { useRouter, useSearchParams } from 'next/navigation';
import {PRODUCT_PARAMS} from '@/utils/variables';
import {OnPageChange} from '@/models';

export default function useRoute() {
    const DEFAULT_PAGE = '1';
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams.toString());

    const sort = params.get(PRODUCT_PARAMS.sort);
    const order = params.get(PRODUCT_PARAMS.order);
    const orderValue = sort && order ? order : null;

    const pageChange: OnPageChange = (e, value) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set(PRODUCT_PARAMS.page, value.toString());
        router.push(`?${params.toString()}`);
    };

    const sortChange = (value?: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(PRODUCT_PARAMS.sort, 'price');
            params.set(PRODUCT_PARAMS.order, value);
        } else {
            params.delete(PRODUCT_PARAMS.sort);
            params.delete(PRODUCT_PARAMS.order);
        }

        params.set(PRODUCT_PARAMS.page, DEFAULT_PAGE);

        router.push(`?${params.toString()}`);
    };

    return {
        orderValue,
        pageChange,
        sortChange,
    }
}