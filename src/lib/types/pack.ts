import { Item } from './item';

export type Pack = {
    id: string;
    title: string;
    items: Item[];
};

export type PackData = {
    id: string;
    title: string;
    itemIds: string[];
};
