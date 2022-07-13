import { ProductItem } from 'pages/products/Products.types';

export type DetailsDialogProps = ProductItem & {
    onClose: () => void;
};
