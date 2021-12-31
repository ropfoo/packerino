import { useNavigate, useParams } from 'react-router-dom';
import EditModeButton from '../components/Buttons/IconButtons/EditModeButton';
import Modal from '../components/Modal';
import Page from '../components/Page/Page';
import { useItem } from '../hooks/useItem';

const ItemPage: React.FC = () => {
    const { id } = useParams();
    const { item, isLoading } = useItem(id);
    const navigate = useNavigate();

    return (
        <>
            <Page title={item?.title ?? ''} hasNavBack>
                {item && (
                    <>
                        <div className='absolute w-full'>
                            <Modal isVisible={isLoading} isSpinner />
                        </div>
                        <div>
                            <EditModeButton
                                onClick={() =>
                                    navigate(`/item/edit/${item.id}`)
                                }
                            />
                        </div>
                        <img src={item.imageUrl} alt='' />
                        {/* 
                        {isEditMode && (
                            <button
                                onClick={() => {
                                    removeItem(item.id);
                                    navigate('/items');
                                }}>
                                delete item
                            </button>
                        )} */}
                    </>
                )}
            </Page>
        </>
    );
};

export default ItemPage;
