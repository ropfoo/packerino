import { useState } from 'react';
import FAPButton from '../components/Buttons/FAPButton';
import PackCard from '../components/Cards/PackCard';
import PackCreator from '../components/Forms/PackCreator';
import Modal from '../components/Modal';
import Page from '../components/Page';

import { usePacks } from '../hooks/usePacks';

const PacksPage: React.FC = () => {
    const { packs } = usePacks();
    const [isPackModalVisible, setIsPackModalVisible] = useState(false);

    return (
        <Page title='Packs'>
            <div className='grid gap-5'>
                {packs?.map(pack => (
                    <PackCard key={pack.id} pack={pack} />
                ))}
            </div>
            <FAPButton
                label='create pack'
                onClick={() => setIsPackModalVisible(true)}
            />
            <Modal
                isVisible={isPackModalVisible}
                onBackdropClick={() => setIsPackModalVisible(false)}>
                <PackCreator onCreate={() => setIsPackModalVisible(false)} />
            </Modal>
        </Page>
    );
};

export default PacksPage;
