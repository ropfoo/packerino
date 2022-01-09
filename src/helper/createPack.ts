import { Item } from '../lib/types/item';
import { Pack, PackData } from '../lib/types/pack';
import { add } from './add';

export const createPack = (packData: PackData, items?: Item[] | null): Pack => {
    if (items) {
        // items
        const packItems = items.filter(item =>
            packData.itemIds.includes(item.id)
        );

        // total weight
        const totalWeight = packItems
            .map(item => parseFloat(item.weight!))
            .reduce(add, 0);

        // total price
        const totalPrice = packItems
            .map(item => parseInt(item.price!))
            .reduce(add, 0);

        // total required price
        const totalPriceReq = packItems
            .filter(item => !item.owning)
            .map(item => parseInt(item.price!))
            .reduce(add, 0);

        return {
            id: packData.id,
            title: packData.title,
            items: packItems,
            totalWeight,
            totalPrice,
            totalPriceReq,
        };
    }
    return {
        id: packData.id,
        title: packData.title,
        items: [],
        totalWeight: 0,
        totalPrice: 0,
        totalPriceReq: 0,
    };
};
