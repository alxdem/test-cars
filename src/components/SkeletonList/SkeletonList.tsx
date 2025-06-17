import SkeletonCard from '@/components/SkeletonCard/SkeletonCard';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import ProductGridItem from '@/components/ProductGridItem/ProductGridItem';

export default function SkeletonList() {
    const quantity = 4;
    const array = Array(quantity).fill(0);

    return (
        <ProductGrid>
            {array.map((_, index) => (
                <ProductGridItem key={index}>
                    <SkeletonCard/>
                </ProductGridItem>
            ))}
        </ProductGrid>
    );
}