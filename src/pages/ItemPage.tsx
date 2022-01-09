import { useParams } from 'react-router-dom';
import InfoElement from '../components/InfoElement';
import Modal from '../components/Modal';
import Page from '../components/Page/Page';
import { useItem } from '../hooks/useItem';
import { FaMoneyBillWave, FaWeightHanging } from 'react-icons/fa';
import { GiLightBackpack } from 'react-icons/gi';
import Tag from '../components/Tag';

import ItemContextMenu from '../components/ItemContextMenu';

const ItemPage: React.FC = () => {
    const { id } = useParams();
    const { item, isLoading } = useItem(id);

    return (
        <>
            <Page
                title={item?.title ?? ''}
                hasNavBack
                titleElement={<ItemContextMenu item={item} />}>
                {item && (
                    <>
                        <div className='absolute w-full'>
                            <Modal isVisible={isLoading} isSpinner />
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex'>
                                {item.tags?.map(tag => (
                                    <Tag key={tag} tagName={tag} />
                                ))}
                            </div>
                        </div>
                        <div
                            className='
                            flex 
                            flex-col md:flex-row 
                            md:items-center 
                            my-12
                        '>
                            <div className='flex justify-center mb-16 md:mb-0 md:mr-16'>
                                <img
                                    className='
                                w-44
                                h-44
                                rounded-md
                                '
                                    src={item.imageUrl}
                                    alt=''
                                />
                            </div>
                            <ul className='flex'>
                                <li>
                                    <InfoElement
                                        icon={<GiLightBackpack size={20} />}
                                        label='owning'
                                        value={item.owning}
                                    />
                                </li>
                                <li>
                                    <InfoElement
                                        icon={<FaMoneyBillWave size={20} />}
                                        label='costs'
                                        value={`${item.price}€` ?? ''}
                                    />
                                </li>
                                <li>
                                    <InfoElement
                                        icon={<FaWeightHanging size={20} />}
                                        label='weight'
                                        value={`${item.weight}kg` ?? ''}
                                    />
                                </li>
                            </ul>
                        </div>
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
