import ItemCreator from '../components/Forms/ItemCreator';
import Page from '../components/Page/Page';

const CreateItemPage: React.FC = () => {
    return (
        <Page title='Create Item' hasNavBack>
            <ItemCreator />
        </Page>
    );
};

export default CreateItemPage;
