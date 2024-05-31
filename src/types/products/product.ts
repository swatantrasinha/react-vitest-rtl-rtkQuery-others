export type ProductCardProps= {
    id: number;
    brand: string;
    category: string;
    rating: number;
    price: number;
    images: string[];
    tags: string[];
    title: string;
    description: string;
}

export type RawDataProducts= {
    limit:number;
    skip: number;
    products: ProductCardProps[];
    total: number;
}