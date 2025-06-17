import {ChangeEvent} from 'react';

type SortOrder = 'asc' | 'desc' | '';

export interface Params {
    page: string;
    sort: string;
    order: string
}

export interface SelectItem {
    value: SortOrder;
    text: string;
}

export interface Product {
    price: number;
    modification_id: string;
    color: string;
    year: number;
    run: number;
    unique_id: number;
    engine_type: string;
    folder_id: string;
    mark_id: string;
    gearbox: string;
    images: {
        image: string[];
    };
}

export type SearchParam = string | string[] | undefined;
export type SearchParams = Promise<{ [key: string]: SearchParam }>

export type OnPageChange = (
    e: ChangeEvent<unknown>,
    value: number,
) => void;