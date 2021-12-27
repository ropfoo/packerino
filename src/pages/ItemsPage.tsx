import { useState } from 'react';
import FAPButton from '../components/Buttons/FAPButton';
import ItemCard from '../components/Cards/ItemCard';
import ItemCreator from '../components/Forms/ItemCreator';
import Modal from '../components/Modal';
import Page from '../components/Page';
import { useItems } from '../hooks/useItems';

const ItemsPage: React.FC = () => {
    const { items } = useItems();
    const [isCreatorVisible, setIsCreatorVisible] = useState(false);

    return (
        <Page title='Items'>
            <div className='flex flex-col md:flex-row flex-nowrap'>
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
