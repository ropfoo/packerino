import { Item } from '../lib/types/item';
import { Pack, PackData, WeatherType } from '../lib/types/pack';
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

        const getWeatherType = (weatherName: string) => {
            switch (weatherName) {
                case 'sun':
                    return WeatherType.SUN;

                case 'rain':
                    return WeatherType.RAIN;

                case 'snow':
                    return WeatherType.SNOW;

                default:
                    return WeatherType.SUN;
            }
        };

        return {
            id: packData.id,
            title: packData.title,
            items: packItems,
            weather: packData.weather?.map(w => getWeatherType(w)),
            totalWeight,
            totalPrice,
            totalPriceReq,
        };
    }
    return {
        id: packData.id,
        title: packData.title,
        items: [],
        weather: [WeatherType.SUN],
        totalWeight: 0,
        totalPrice: 0,
        totalPriceReq: 0,
    };
};
