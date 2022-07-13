export type ProductItem = {
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
};

export type ProductListResponseData = {
    items: Array<ProductItem>;
    links: {
        first: string;
        last: string;
        next: string;
        previous: string;
    };
    meta: {
        currentPage: number;
        itemCount: number;
        itemsPerPage: number;
        totalItems: number;
        totalPages: number;
    };
};
