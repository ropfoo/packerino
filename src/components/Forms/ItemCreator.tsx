import { Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useItems } from '../../hooks/useItems';
import { useUser } from '../../hooks/useUser';
import { Item } from '../../lib/types/item';
import SubmitButton from '../Buttons/SubmitButton';
import Checkbox from '../Input/Checkbox';
import ImgInput from '../Input/ImgInput';
import TagSelector from '../Input/TagSelector';
import TextInput from '../Input/TextInput';

interface ItemCreatorProps {
    defaultItem?: Item;
    onCreate?: () => void;
}

const ItemCreator: React.FC<ItemCreatorProps> = ({ defaultItem, onCreate }) => {
    const { createItem } = useItems();
    const { user, addTags } = useUser();
    const navigate = useNavigate();

    const getNewTags = (tags: string[]) =>
        tags.filter(tag => !user?.tags.includes(tag));

    const handleSubmit = (item: Item) => {
        createItem(item);
        addTags(getNewTags(item.tags));
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
                    tags: [],
                }
            }
            onSubmit={handleSubmit}>
            {({ values }) => (
                <Form>
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
                            md:grid-cols-2
                        '>
                            <div
                                className='
                            flex
                            justify-center md:justify-start
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
                                gap-5
                                p-5 md:p-0
                            '>
                                <TextInput name='title' label='Titel' />
                                <TextInput name='url' label='link' />
                                <Checkbox
                                    name='owning'
                                    label='owning'
                                    isChecked={values.owning}
                                />
                            </div>
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
                            <TextInput name='weight' label='weight' isSmall />
                        </div>
                        <div>
                            <p className='mb-3'>Tags</p>
                            <TagSelector name='tags' />
                        </div>
                    </div>
                    <SubmitButton label='add item' />
                </Form>
            )}
        </Formik>
    );
};

export default ItemCreator;
