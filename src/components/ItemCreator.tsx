import { Field, Form, Formik } from 'formik';
import React from 'react';
import { addItem } from '../lib/firebase/item';
import { Item } from '../lib/types/item';
import { useAuthContext } from './Auth/Auth.provider';
import SubmitButton from './Buttons/SubmitButton';
import Checkbox from './Input/Checkbox';
import ImgInput from './Input/ImgInput';
import TextInput from './Input/TextInput';

interface ItemCreatorProps {
    addToList?: (item: Item) => void;
}

const ItemCreator: React.FC<ItemCreatorProps> = ({ addToList }) => {
    const { userAuth } = useAuthContext();
    const handleSubmit = (item: Item) => {
        // addToList(item);
        userAuth && addItem(item, userAuth.uid);
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
                        <ImgInput
                            name='imageUrl'
                            label='Image'
                            url={values.imageUrl}
                        />
                        <TextInput name='title' label='Titel' />
                        <TextInput name='url' label='link' />
                        <Checkbox
                            name='owning'
                            label='owning'
                            isChecked={values.owning}
                        />
                        <SubmitButton label='add item' />
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default ItemCreator;
