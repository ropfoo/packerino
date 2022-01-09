import { Item } from './item';

export type Pack = {
    id: string;
    title: string;
    items: Item[];
    totalWeight: number;
    totalPrice: number;
    totalPriceReq: number;
};

export type PackData = {
    id: string;
    title: string;
    itemIds: string[];
};
