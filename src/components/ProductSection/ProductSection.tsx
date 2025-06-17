import {getData} from '@/utils/methods';
import {ProductSectionProps} from '@/components/ProductSection/ProductSection.props';
import {Product} from "@/models";
import ProductList from "@/components/ProductList/ProductList";
import AppPagination from "@/components/AppPagination/AppPagination";

export default async function ProductSection({page, sort, order}: ProductSectionProps) {
    const data = await getData({
        page,
        sort,
        order,
    });

    const products: Product[] = data.data || [];
    const {page: currentPage, last_page} = data.meta || {};

    return (
        <>
            <ProductList products={products}/>
            <AppPagination
                count={last_page}
                page={currentPage}
            />
        </>
    );
}