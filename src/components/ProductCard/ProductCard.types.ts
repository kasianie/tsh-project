import { ProductItem } from 'pages/products/Products.types';

export type ProductCardProps = ProductItem & {
    onClick: () => void;
};
