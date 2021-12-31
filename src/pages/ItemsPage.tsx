import { useState } from 'react';
import FAPButton from '../components/Buttons/FAPButton';
import ItemCard from '../components/Cards/ItemCard';
import ItemCreator from '../components/Forms/ItemCreator';
import Modal from '../components/Modal';
import Page from '../components/Page/Page';
import { useItems } from '../hooks/useItems';

const ItemsPage: React.FC = () => {
    const { items, isLoading } = useItems();
    const [isCreatorVisible, setIsCreatorVisible] = useState(false);

    return (
        <Page title='Items'>
            <div className='absolute w-full'>
                <Modal isVisible={isLoading} isSpinner />
            </div>
            <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
                {items?.map(item => (
                    <ItemCard key={item.id} item={item} />
                ))}
            </div>
            <FAPButton label='add' onClick={() => setIsCreatorVisible(true)} />
            <Modal
                isVisible={isCreatorVisible}
                onBackdropClick={() => setIsCreatorVisible(false)}>
                <ItemCreator onCreate={() => setIsCreatorVisible(false)} />
            </Modal>
        </Page>
    );
};

export default ItemsPage;
