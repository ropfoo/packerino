import { Item } from '../lib/types/item';
import { Pack, PackData } from '../lib/types/pack';

export const createPack = (packData: PackData, items?: Item[] | null): Pack => {
    if (items) {
        const setItems = items.filter(item =>
            packData.itemIds.includes(item.id)
        );
        return {
            id: packData.id,
            title: packData.title,
            items: setItems,
        };
    }
    return {
        id: packData.id,
        title: packData.title,
        items: [],
    };
};
