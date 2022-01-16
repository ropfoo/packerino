import { lazy, Suspense, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FAPButton from '../components/Buttons/FAPButton';
import Modal from '../components/Modal';
import Page from '../components/Page/Page';
import { useItems } from '../hooks/useItems';
import { Item, ItemCardConfig } from '../lib/types/item';

export const ItemsList: React.FC<{
    items?: Item[] | null;
}> = ({ items }) => {
    const [itemConfig, setItemConfig] = useState<ItemCardConfig>({
        price: false,
        weight: false,
    });
    return (
        <div>
            <div className='mb-5'>
                <button
                    className={`
                ${itemConfig.price ? 'bg-dark border-dark' : ' border-gravel'} 
                border-2
                transition-colors
                p-2
                rounded-2xl
                `}
                    onClick={() =>
                        setItemConfig(conf => ({ ...conf, price: !conf.price }))
                    }>
                    price
                </button>
                <button
                    className={`
                ${itemConfig.weight ? 'bg-dark border-dark' : ' border-gravel'} 
                border-2
                transition-colors
                p-2
                rounded-2xl
                `}
                    onClick={() =>
                        setItemConfig(conf => ({
                            ...conf,
                            weight: !conf.weight,
                        }))
                    }>
                    weight
                </button>
            </div>
            <div
                className='
            grid 
            gap-5 
            md:grid-cols-2 
            '>
                {items?.map(item => (
                    <Suspense key={item.id} fallback={<div>loading</div>}>
                        <ItemCard item={item} config={itemConfig} />
                    </Suspense>
                ))}
            </div>
        </div>
    );
};

const ItemCard = lazy(() => import('../components/Cards/ItemCard'));

const ItemsPage: React.FC = () => {
    const { items, isLoading } = useItems();
    const navigate = useNavigate();

    return (
        <Page title='Items'>
            <div className='absolute w-full'>
                <Modal isVisible={isLoading} isSpinner />
            </div>
            <ItemsList items={items} />
            <FAPButton label='add' onClick={() => navigate('/items/create')} />
        </Page>
    );
};

export default ItemsPage;
