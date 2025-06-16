import {Params, SearchParam} from '@/models';

export function formatParams(value: SearchParam, fallback: string): string {
    return Array.isArray(value) ? value[0] : value ?? fallback;
}

export async function getData(params: Params) {
    const LIMIT = 12;
    const {
        page = '1',
        sort = '',
        order = '',
    } = params;
    let res = null;

    const url = `${process.env.API_URL}/cars`;
    const searchParams = new URLSearchParams();
    searchParams.set('_limit', String(LIMIT));
    searchParams.set('_page', page);

    if (sort) {
        searchParams.set('_sort', sort);
    }

    if (order) {
        searchParams.set('_order', order);
    }

    try {
        res = await fetch(`${url}?${searchParams.toString()}`);

        return res.json();
    } catch (err) {
        console.error(err);
        return err;
    }
}