import {SelectItem} from '@/models';

export const SELECT_SORT: SelectItem[] = [
    {
        text: 'По умолчанию',
        value: '',
    },
    {
        text: 'По возрастанию цены',
        value: 'asc',
    },
    {
        text: 'По убыванию цены',
        value: 'desc',
    }
]

export const PRODUCT_PARAMS = {
    page: '_page',
    sort: '_sort',
    order: '_order',
}