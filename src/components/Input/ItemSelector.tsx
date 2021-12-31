import { useField } from 'formik';
import React, { useEffect, useRef, useState } from 'react';
import { useItems } from '../../hooks/useItems';
import ItemSelection from './ItemSelection';

interface ItemSelectorProps {
    name: string;
    remove?: () => void;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ name, remove }) => {
    const { items } = useItems();
    const [{ value }, , { setValue }] = useField(name);
    const [inputValue, setInputValue] = useState('');
    const [isResultVisible, setIsResultVisible] = useState(false);
    const selectorRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleBlur = (e: React.FocusEvent) => {
        e.relatedTarget !== selectorRef.current && setIsResultVisible(false);
    };

    useEffect(() => {
        setInputValue(value.title ?? '');
    }, [value]);

    return (
        <div className='flex'>
            <input
                ref={inputRef}
                className={`
                    bg-gravel
                    text-night
                `}
                value={inputValue}
                placeholder='search'
                type='text'
                onChange={e => setInputValue(e.target.value)}
                onFocus={() => setIsResultVisible(true)}
                onBlur={handleBlur}
            />

            {isResultVisible && (
                <div
                    ref={selectorRef}
                    tabIndex={0}
                    className='#
                    bg-gravel
                    rounded-lg 
                    w-44  
                    absolute
                    translate-y-8
                    '>
                    {items
                        ?.filter(item => item.title.startsWith(inputValue))
                        .map(item => (
                            <ItemSelection
                                key={item.id}
                                item={item}
                                isSelected={value.id === item.id}
                                onClick={() => {
                                    setValue(item);
                                    setIsResultVisible(false);
                                }}
                            />
                        ))}
                </div>
            )}
            <button onClick={() => remove && remove()}>remove</button>
        </div>
    );
};

export default ItemSelector;
