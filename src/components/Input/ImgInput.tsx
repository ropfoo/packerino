import { Field } from 'formik';
import React, { useState } from 'react';
import { FiCheckSquare } from 'react-icons/fi';
import { AbsoluteCenter } from '../Wrapper';
import { InputProps } from './types/InputProps';

interface ImgInputProps extends InputProps {
    url: string;
}

const ImgInput: React.FC<ImgInputProps> = ({ name, url }) => {
    const [isUrlInputVisible, setIsUrlInputVisible] = useState(false);

    const showUrlInput = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsUrlInputVisible(true);
    };
    const hideUrlInput = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsUrlInputVisible(false);
    };

    return (
        <label>
            <div
                className='
                bg-gravel
                w-32 md:w-44
                h-32 md:h-44
                rounded-2xl
                flex
                items-center
                justify-center

            '>
                {url && (
                    <img
                        src={url}
                        alt='url input'
                        className='
                            w-full
                            h-full
                            object-cover
                            rounded-2xl
                        '
                    />
                )}
                {isUrlInputVisible && (
                    <AbsoluteCenter>
                        <div className='flex '>
                            <Field
                                className='
                                 px-2
                                 bg-dirt
                                 border-2
                                 rounded-bl-lg
                                 rounded-tl-lg
                                 '
                                name={name}
                            />
                            <button
                                className='
                                bg-dark
                                rounded-br-lg
                                rounded-tr-lg
                                p-2 

                                '
                                onClick={hideUrlInput}>
                                <FiCheckSquare size={20} />
                            </button>
                        </div>
                    </AbsoluteCenter>
                )}
            </div>
            <div
                className='
                  
                '>
                <button onClick={showUrlInput}>edit</button>
            </div>
        </label>
    );
};

export default ImgInput;
