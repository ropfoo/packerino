import { FieldArray, Form, Formik } from 'formik';
import SubmitButton from '../Buttons/SubmitButton';
import ItemSelector from '../Input/ItemSelector';

const PackCreator: React.FC = () => {
    return (
        <>
            <Formik
                initialValues={{ itemIds: [] }}
                onSubmit={values => console.log(values)}>
                {({ values }) => (
                    <Form>
                        <FieldArray
                            name='itemIds'
                            render={arrayHelpers => (
                                <div>
                                    {values.itemIds.map((itemId, index) => (
                                        <ItemSelector
                                            name={`itemIds.${index}`}
                                            key={index}
                                        />
                                    ))}
                                    <button
                                        onClick={() =>
                                            arrayHelpers.insert(
                                                values.itemIds.length,
                                                ''
                                            )
                                        }>
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
