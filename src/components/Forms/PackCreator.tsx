import { FieldArray, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usePacks } from '../../hooks/usePacks';
import { Item } from '../../lib/types/item';
import { Pack, WeatherType } from '../../lib/types/pack';
import AddButton from '../Buttons/IconButtons/AddButton';
import SubmitButton from '../Buttons/SubmitButton';
import ItemSelector from '../Input/ItemSelector';
import TextInput from '../Input/TextInput';
import WeatherSelector from '../Input/WeatherSelector';

type PackFormValues = {
    id: string;
    title: string;
    items: Item[];
    weather: WeatherType[];
};

interface PackCreatorProps {
    onCreate?: () => void;
    defaultPack?: Pack;
}

const PackCreator: React.FC<PackCreatorProps> = ({ defaultPack, onCreate }) => {
    const { createPack } = usePacks();
    const navigate = useNavigate();
    const handleSubmit = ({ id, title, items, weather }: PackFormValues) => {
        const itemIds = items.map(item => item.id);
        createPack({ title, itemIds, id, weather });
        onCreate && onCreate();
        navigate(-1);
    };
    return (
        <>
            <Formik
                initialValues={
                    defaultPack ?? { id: '', title: '', items: [], weather: [] }
                }
                onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form>
                        <TextInput name='title' label='title' />
                        <div className='my-10'>
                            <WeatherSelector name='weather' />
                        </div>
                        <FieldArray
                            name='items'
                            render={arrayHelpers => (
                                <div>
                                    <div className='my-5 flex justify-between items-center'>
                                        <h3 className='text-lg'>Items</h3>
                                        <AddButton
                                            onClick={e => {
                                                e.preventDefault();
                                                arrayHelpers.push('');
                                            }}
                                        />
                                    </div>
                                    <div className='mb-5 '>
                                        {values.items.map((_, index) => (
                                            <ItemSelector
                                                name={`items.${index}`}
                                                remove={() =>
                                                    arrayHelpers.remove(index)
                                                }
                                                key={index}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        />
                        <SubmitButton label='submit' />
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default PackCreator;
