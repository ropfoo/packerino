import { useState } from 'react';
import FAPButton from '../components/Buttons/FAPButton';
import PackCard from '../components/Cards/PackCard';
import PackCreator from '../components/Forms/PackCreator';
import Modal from '../components/Modal';
import Page from '../components/Page';
import { createPack } from '../helper/pack';
import { useItems } from '../hooks/useItems';

const PacksPage: React.FC = () => {
    const { items } = useItems();

    const [isPackModalVisible, setIsPackModalVisible] = useState(false);

    const testSet = createPack(
        ['IpUUs05dKhuI6K0WTaMw', 'U8CzigiqxwLXNoQal8Ep'],
        items
    );

    return (
        <Page title='Packs'>
            <PackCard pack={testSet} />
            <FAPButton
                label='create pack'
                onClick={() => setIsPackModalVisible(true)}
            />
            <Modal
                isVisible={isPackModalVisible}
                onBackdropClick={() => setIsPackModalVisible(false)}>
                <PackCreator />
            </Modal>
        </Page>
    );
};

export default PacksPage;
