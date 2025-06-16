import {Product} from '@/models';
import {ComponentPropsWithoutRef} from 'react';

type DivPropsWithoutColor = Omit<ComponentPropsWithoutRef<'div'>, 'color'>;

export interface ProductCardProps extends Omit<Product, 'images'>, DivPropsWithoutColor {
    image: string;
    isPriority?: boolean;
}