import { useNavigate } from 'react-router-dom';
import FAPButton from '../components/Buttons/FAPButton';
import PackCard from '../components/Cards/PackCard';
import Page from '../components/Page/Page';

import { usePacks } from '../hooks/usePacks';

const PacksPage: React.FC = () => {
    const { packs } = usePacks();
    const navigate = useNavigate();

    return (
        <Page title='Packs'>
            <div className='grid gap-5'>
                {packs?.map(pack => (
                    <PackCard key={pack.id} pack={pack} />
                ))}
            </div>
            <FAPButton
                label='create pack'
                onClick={() => navigate('/packs/create')}
            />
        </Page>
    );
};

export default PacksPage;
