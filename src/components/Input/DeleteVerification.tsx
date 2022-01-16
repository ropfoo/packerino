import { useState } from 'react';
import SubmitButton from '../Buttons/SubmitButton';

interface DelteVerifcationProps {
    verificationString: string;
    onDelete: () => void;
}

const DeleteVerification: React.FC<DelteVerifcationProps> = ({
    verificationString,
    onDelete,
}) => {
    const [inputString, setInputString] = useState('');

    return (
        <div>
            <div>
                type{' '}
                <span className='bg-night p-3 rounded-md italic font-bold'>
                    {verificationString}
                </span>{' '}
                to delete
            </div>
            <div>
                <input onChange={e => setInputString(e.target.value)} />
            </div>

            <SubmitButton
                style={{ opacity: inputString === verificationString ? 1 : 0 }}
                disabled={inputString !== verificationString}
                label='delete'
                onClick={onDelete}
            />
        </div>
    );
};

export default DeleteVerification;
