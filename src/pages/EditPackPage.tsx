import { useParams } from 'react-router-dom';
import PackCreator from '../components/Forms/PackCreator';
import Page from '../components/Page/Page';
import { usePack } from '../hooks/usePack';

const EditPackPage: React.FC = () => {
    const { id } = useParams();
    const { pack, refetchPack } = usePack(id);
    return (
        <Page title='Edit Pack'>
            {pack && (
                <PackCreator
                    defaultPack={pack}
                    onCreate={() => refetchPack()}
                />
            )}
        </Page>
    );
};
export default EditPackPage;
