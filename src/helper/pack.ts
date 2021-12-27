import { Item } from '../lib/types/item';
import { Pack } from '../lib/types/pack';

export const createPack = (itemIds: string[], items?: Item[] | null): Pack => {
    if (items) {
        const setItems = items.filter(item => itemIds.includes(item.id));
        return {
            title: 'test',
            items: setItems,
        };
    }
    return {
        title: 'test',
        items: [],
    };
};
