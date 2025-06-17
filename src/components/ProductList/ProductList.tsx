import ProductCard from '@/components/ProductCard/ProductCard';
import type {ProductListProps} from '@/components/ProductList/ProductList.props';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import ProductGridItem from '@/components/ProductGridItem/ProductGridItem';

export default function ProductList({products}: ProductListProps) {
    return (
        <ProductGrid>
            {products.map((product, index) => {
                const {images, unique_id, ...otherProps} = product;
                const image = images.image[0] || '';
                const isPriority = index <= 3;

                return (
                    <ProductGridItem key={unique_id}>
                        <ProductCard
                            image={image}
                            isPriority={isPriority}
                            {...otherProps}
                        />
                    </ProductGridItem>
                );
            })}
        </ProductGrid>
    );
}