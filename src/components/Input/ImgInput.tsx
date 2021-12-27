import { Field } from 'formik';
import React, { useState } from 'react';
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
                bg-white
                border
                w-44
                h-44
                absolute
                left-[50%]
                -translate-x-1/2
                -translate-y-28
                rounded-full
                flex
                items-center
                justify-center

            '>
                {url && (
                    <img
                        width={100}
                        height={100}
                        src={url}
                        alt='image url input'
                    />
                )}

                <div className='absolute bottom-0 right-0'>
                    <button onClick={showUrlInput}>edit</button>
                </div>
            </div>

            {isUrlInputVisible && (
                <AbsoluteCenter className='-translate-y-2'>
                    <Field className='border w-60 p-2 rounded-lg' name={name} />
                    <button onClick={hideUrlInput}>ok</button>
                </AbsoluteCenter>
            )}
        </label>
    );
};

export default ImgInput;
