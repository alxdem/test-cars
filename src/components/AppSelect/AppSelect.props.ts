import {SelectItem} from '@/models';

export default interface AppSelectProps {
    label: string;
    id: string;
    items: SelectItem[];
}