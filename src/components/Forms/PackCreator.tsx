import { FieldArray, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { usePacks } from '../../hooks/usePacks';
import { Item } from '../../lib/types/item';
import { Pack } from '../../lib/types/pack';
import SubmitButton from '../Buttons/SubmitButton';
import ItemSelector from '../Input/ItemSelector';
import TextInput from '../Input/TextInput';

type PackFormValues = {
    id: string;
    title: string;
    items: Item[];
};

interface PackCreatorProps {
    onCreate?: () => void;
    defaultPack?: Pack;
}

const PackCreator: React.FC<PackCreatorProps> = ({ defaultPack, onCreate }) => {
    const { createPack } = usePacks();
    const navigate = useNavigate();
    const handleSubmit = ({ id, title, items }: PackFormValues) => {
        const itemIds = items.map(item => item.id);
        createPack({ title, itemIds, id });
        onCreate && onCreate();
        navigate(-1);
    };
    return (
        <>
            <Formik
                initialValues={defaultPack ?? { id: '', title: '', items: [] }}
                onSubmit={handleSubmit}>
                {({ values }) => (
                    <Form>
                        <TextInput name='title' label='title' />
                        <FieldArray
                            name='items'
                            render={arrayHelpers => (
                                <div>
                                    {values.items.map((_, index) => (
                                        <ItemSelector
                                            name={`items.${index}`}
                                            remove={() =>
                                                arrayHelpers.remove(index)
                                            }
                                            key={index}
                                        />
                                    ))}
                                    <button
                                        onClick={e => {
                                            e.preventDefault();
                                            arrayHelpers.push('');
                                        }}>
                                        +
                                    </button>
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
