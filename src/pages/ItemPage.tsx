import { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import EditModeButton from '../components/Buttons/IconButtons/EditModeButton';
import Modal from '../components/Modal';
import Page from '../components/Page/Page';
import PageTitle from '../components/Page/PageTitle';
import { useItem } from '../hooks/useItem';
import { useItems } from '../hooks/useItems';

const ItemPage: React.FC = () => {
    const { id } = useParams();
    const { item, isLoading } = useItem(id);
    const { removeItem } = useItems();
    const navigate = useNavigate();
    const [isEditMode, setIsEditMode] = useState(false);

    return (
        <>
            <Page>
                {item && (
                    <>
                        <div>
                            <FiArrowLeft
                                size={26}
                                onClick={() => navigate(-1)}
                            />
                            <PageTitle>{item.title}</PageTitle>
                        </div>
                        <div className='absolute w-full'>
                            <Modal isVisible={isLoading} isSpinner />
                        </div>
                        <div>
                            <EditModeButton
                                isActive={isEditMode}
                                onClick={() => setIsEditMode(em => !em)}
                            />
                        </div>
                        <img src={item.imageUrl} alt='' />

                        {isEditMode && (
                            <button
                                onClick={() => {
                                    removeItem(item.id);
                                    navigate('/items');
                                }}>
                                delete item
                            </button>
                        )}
                    </>
                )}
            </Page>
        </>
    );
};

export default ItemPage;
