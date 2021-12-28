import { FieldArray, Form, Formik } from 'formik';
import { usePacks } from '../../hooks/usePacks';
import { Item } from '../../lib/types/item';
import SubmitButton from '../Buttons/SubmitButton';
import ItemSelector from '../Input/ItemSelector';
import TextInput from '../Input/TextInput';

type PackFormValues = {
    title: string;
    items: Item[];
};

interface PackCreatorProps {
    onCreate?: () => void;
}

const PackCreator: React.FC<PackCreatorProps> = ({ onCreate }) => {
    const { createPack } = usePacks();
    const handleSubmit = ({ title, items }: PackFormValues) => {
        const itemIds = items.map(item => item.id);
        createPack({ title, itemIds, id: '' });
        onCreate && onCreate();
    };
    return (
        <>
            <Formik
                initialValues={{ title: '', items: [] }}
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
