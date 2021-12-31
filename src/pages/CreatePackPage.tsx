import PackCreator from '../components/Forms/PackCreator';
import Page from '../components/Page/Page';

const CreatePackPage: React.FC = () => {
    return (
        <Page title='Create Pack' hasNavBack>
            <PackCreator />
        </Page>
    );
};

export default CreatePackPage;
