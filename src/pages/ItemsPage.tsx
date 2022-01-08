import { lazy, Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import FAPButton from '../components/Buttons/FAPButton';
import Modal from '../components/Modal';
import Page from '../components/Page/Page';
import { useItems } from '../hooks/useItems';

const ItemCard = lazy(() => import('../components/Cards/ItemCard'));

const ItemsPage: React.FC = () => {
    const { items, isLoading } = useItems();
    const navigate = useNavigate();

    return (
        <Page title='Items'>
            <div className='absolute w-full'>
                <Modal isVisible={isLoading} isSpinner />
            </div>
            <div
                className='
                grid 
                gap-5 
                md:grid-cols-2 
                '>
                {items?.map(item => (
                    <Suspense key={item.id} fallback={<div>loading</div>}>
                        <ItemCard item={item} />
                    </Suspense>
                ))}
            </div>
            <FAPButton label='add' onClick={() => navigate('/items/create')} />
        </Page>
    );
};

export default ItemsPage;
