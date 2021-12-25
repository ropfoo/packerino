import { useState } from 'react';
import FAPButton from '../components/Input/FAPButton';
import ItemCreator from '../components/ItemCreator';
import ItemList from '../components/ItemList';
import Modal from '../components/Modal';

const ItemsPage: React.FC = () => {
    const [isCreatorVisible, setIsCreatorVisible] = useState(false);
    return (
        <>
            <h1 className='text-3xl bold'>Items</h1>
            <ItemList />
            <FAPButton label='add' onClick={() => setIsCreatorVisible(true)} />
            {isCreatorVisible && (
                <Modal onBackdropClick={() => setIsCreatorVisible(false)}>
                    <ItemCreator />
                </Modal>
            )}
        </>
    );
};

export default ItemsPage;
