import { Form, Formik } from 'formik';
import React from 'react';
import { useItems } from '../../hooks/useItems';
import { Item } from '../../lib/types/item';
import SubmitButton from '../Buttons/SubmitButton';
import Checkbox from '../Input/Checkbox';
import ImgInput from '../Input/ImgInput';
import TextInput from '../Input/TextInput';

interface ItemCreatorProps {
    onCreate?: () => void;
}

const ItemCreator: React.FC<ItemCreatorProps> = ({ onCreate }) => {
    const { createItem } = useItems();

    const handleSubmit = (item: Item) => {
        createItem(item);
        onCreate && onCreate();
    };

    return (
        <Formik
            initialValues={{
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
            }}
            onSubmit={handleSubmit}>
            {({ values }) => (
                <Form>
                    <div className='flex flex-col'>
                        <ImgInput
                            label=''
                            name='imageUrl'
                            url={values.imageUrl}
                        />
                        <span className='mb-20'></span>
                        <div className='grid gap-5 md:grid-cols-2 mb-5'>
                            <TextInput name='title' label='Titel' />
                            <Checkbox
                                name='owning'
                                label='owning'
                                isChecked={values.owning}
                            />
                        </div>
                        <div className='grid gap-5 grid-cols-2 mb-5'>
                            <TextInput name='url' label='link' />
                            <TextInput name='price' label='price' isSmall />
                        </div>

                        <div className='grid gap-5 grid-cols-2 md:grid-cols-4 mb-5'>
                            <TextInput name='weight' label='weight' isSmall />
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

                        <SubmitButton label='add item' />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ItemCreator;
