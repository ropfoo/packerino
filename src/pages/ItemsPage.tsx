import { useState } from 'react';
import FAPButton from '../components/Input/FAPButton';
import ItemCreator from '../components/ItemCreator';
import ItemList from '../components/ItemList';
import Modal from '../components/Modal';
import Page from '../components/Page';

const ItemsPage: React.FC = () => {
    const [isCreatorVisible, setIsCreatorVisible] = useState(false);
    return (
        <Page title='Items'>
            <ItemList />
            <FAPButton label='add' onClick={() => setIsCreatorVisible(true)} />
            {isCreatorVisible && (
                <Modal onBackdropClick={() => setIsCreatorVisible(false)}>
                    <ItemCreator />
                </Modal>
            )}
        </Page>
    );
};

export default ItemsPage;
