import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useItems } from '../../hooks/useItems';
import { Item } from '../../lib/types/item';
import SubmitButton from '../Buttons/SubmitButton';
import Checkbox from '../Input/Checkbox';
import ImgInput from '../Input/ImgInput';
import TextInput from '../Input/TextInput';

interface ItemCreatorProps {
    defaultItem?: Item;
    onCreate?: () => void;
}

const ItemCreator: React.FC<ItemCreatorProps> = ({ defaultItem, onCreate }) => {
    const { createItem } = useItems();
    const navigate = useNavigate();

    const handleSubmit = (item: Item) => {
        createItem(item);
        navigate(-1);
        onCreate && onCreate();
    };

    return (
        <Formik
            initialValues={
                defaultItem ?? {
                    id: '',
                    title: '',
                    imageUrl: '',
                    url: '',
                    owning: false,
                    price: '',
                    weight: '',
                    size: {
                        width: 0,
                        height: 0,
                        length: 0,
                    },
                }
            }
            onSubmit={handleSubmit}>
            {({ values }) => (
                <Form>
                    <div className='grid'>
                        <div
                            className='
                            flex
                            justify-center
                            mb-0 md:mb-5
                        '>
                            <ImgInput
                                label=''
                                name='imageUrl'
                                url={values.imageUrl}
                            />
                        </div>
                        <div
                            className='
                            grid 
                            gap-0 md:gap-5 xl:gap-10
                            md:items-start
                            mb-3 md:mb-10
                        '>
                            <div
                                className='
                                grid 
                                gap-5
                                p-5
                            '>
                                <TextInput name='title' label='Titel' />
                                <TextInput name='url' label='link' />
                                <Checkbox
                                    name='owning'
                                    label='owning'
                                    isChecked={values.owning}
                                />
                            </div>

                            <div
                                className='
                                grid 
                                grid-cols-2 xl:grid-cols-3
                                gap-5
                                border-2
                                border-stonewet
                                rounded-3xl
                                p-5
                            '>
                                <TextInput name='price' label='price' isSmall />
                                <TextInput
                                    name='weight'
                                    label='weight'
                                    isSmall
                                />
                                <TextInput
                                    name='size.height'
                                    label='height'
                                    isSmall
                                />
                                <TextInput
                                    name='size.width'
                                    label='width'
                                    isSmall
                                />
                                <TextInput
                                    name='size.length'
                                    label='length'
                                    isSmall
                                />
                            </div>
                        </div>

                        <SubmitButton label='add item' />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ItemCreator;
