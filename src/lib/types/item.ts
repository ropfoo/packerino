export type Item = {
    id: string;
    title: string;
    imageUrl: string;
    owning: boolean;
    price?: string;
    url?: string;
    weight?: string;
    size?: {
        length: number;
        height: number;
        width: number;
    };
    tags?: string[];
};

export type ItemCardConfig = {
    price?: boolean;
    weight?: boolean;
};
