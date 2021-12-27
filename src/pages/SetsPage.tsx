import SetCard from '../components/Cards/SetCard';
import Page from '../components/Page';
import { useItems } from '../hooks/useItems';
import { Item } from '../lib/types/item';
import { Set } from '../lib/types/set';

const createSet = (itemIds: string[], items?: Item[] | null): Set => {
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

const SetsPage: React.FC = () => {
    const { items } = useItems();

    const testSet = createSet(
        ['IpUUs05dKhuI6K0WTaMw', 'U8CzigiqxwLXNoQal8Ep'],
        items
    );

    return (
        <Page title='Sets'>
            <SetCard set={testSet} />
        </Page>
    );
};

export default SetsPage;
