import { useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import Page from '../components/Page';
import { useItem } from '../hooks/useItem';
import { useItems } from '../hooks/useItems';

const ItemPage: React.FC = () => {
    const { id } = useParams();
    const { item, isLoading } = useItem(id);
    const { removeItem } = useItems();
    const navigate = useNavigate();

    if (isLoading) return <LoadingSpinner />;

    if (item) {
        return (
            <Page title={item.title}>
                <img src={item.imageUrl} alt='' />
                <button
                    onClick={() => {
                        removeItem(item.id);
                        navigate('/items');
                    }}>
                    delete
                </button>
            </Page>
        );
    }
    return <Page title='not found'></Page>;
};

export default ItemPage;
