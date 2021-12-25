import { Field, Form, Formik } from 'formik';
import React from 'react';
import { addItem } from '../lib/firebase/item';
import { Item } from '../lib/types/item';
import ImgInput from './Input/ImgInput';
import TextInput from './Input/TextInput';

interface ItemCreatorProps {
    addToList?: (item: Item) => void;
}

const ItemCreator: React.FC<ItemCreatorProps> = ({ addToList }) => {
    const handleSubmit = (item: Item) => {
        // addToList(item);
        addItem(item);
        console.log('...add data to firebase', item);
    };

    return (
        <Formik
            initialValues={{
                id: '',
                title: '',
                imageUrl: '',
                url: '',
                owning: false,
                price: 0,
                weight: 10,
            }}
            onSubmit={handleSubmit}>
            {({ values }) => (
                <Form>
                    <div className='flex flex-col'>
                        <ImgInput name='imageUrl' url={values.imageUrl} />
                        <TextInput name='title' label='Titel' />
                        <TextInput name='url' label='link' />
                        <Field type='checkbox' name='owning' />
                        <button
                            className='p-3 bg-slate-500 text-white rounded-lg'
                            type='submit'>
                            add
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ItemCreator;
