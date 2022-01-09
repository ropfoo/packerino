import { Item } from './item';

export enum WeatherType {
    SUN = 'sun',
    RAIN = 'rain',
    SNOW = 'snow',
}

export type Pack = {
    id: string;
    title: string;
    items: Item[];
    weather: WeatherType[];
    totalWeight: number;
    totalPrice: number;
    totalPriceReq: number;
};

export type PackData = {
    id: string;
    title: string;
    itemIds: string[];
    weather: string[];
};
