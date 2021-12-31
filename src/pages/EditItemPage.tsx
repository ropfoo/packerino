import { useParams } from 'react-router-dom';
import ItemCreator from '../components/Forms/ItemCreator';
import Page from '../components/Page/Page';
import { useItem } from '../hooks/useItem';

const EditItemPage: React.FC = () => {
    const { id } = useParams();
    const { item, refetchItem } = useItem(id);
    return (
        <Page title='Edit Item' hasNavBack>
            {item && (
                <ItemCreator
                    defaultItem={item}
                    onCreate={() => refetchItem()}
                />
            )}
        </Page>
    );
};

export default EditItemPage;
