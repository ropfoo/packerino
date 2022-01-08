import { useField, useFormikContext } from 'formik';
import React, { useRef, useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { Item } from '../../lib/types/item';
import Tag from '../Tag';

interface TagSelectorProps {
    name: string;
}

const TagSelector: React.FC<TagSelectorProps> = ({ name }) => {
    const { user } = useUser();
    const { values } = useFormikContext<Item>();
    const [{ value }, , { setValue }] = useField<string[]>(name);
    const [tagInput, setTagInput] = useState('');
    const [istTagInputActive, setIsTagInputActive] = useState(false);
    const tagSelectorRef = useRef<HTMLDivElement>(null);
    const intputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && user) {
            if (tagInput) {
                setTagInput('');
                setValue([...value, tagInput]);
            }
        }
    };

    const handleTagClick = (selection: string) => {
        if (value) {
            value.includes(selection)
                ? setValue(value.filter(val => val !== selection))
                : setValue([...value, selection]);
        } else {
            setValue([selection]);
        }
    };

    return (
        <div className='relative'>
            <div
                onClick={() => intputRef.current?.focus()}
                className='
            flex 
            flex-wrap 
            relative
            border-2
            p-3
            rounded-lg
            border-stonewet
            '>
                {values?.tags?.map(tag => (
                    <Tag
                        tagName={tag}
                        isSelected={value && value.includes(tag)}
                        onClick={selection => handleTagClick(selection)}
                        isClickable
                        key={tag}>
                        {tag}
                    </Tag>
                ))}
                <div className='relative'>
                    <input
                        ref={intputRef}
                        className='
                    max-w-fit
                    bg-transparent
                    outline-none
                    '
                        value={tagInput}
                        onKeyDown={handleKeyDown}
                        onFocus={() => setIsTagInputActive(true)}
                        onBlur={e =>
                            e.relatedTarget !== tagSelectorRef.current &&
                            setIsTagInputActive(false)
                        }
                        onChange={e => setTagInput(e.target.value)}
                    />
                </div>
            </div>
            <div
                ref={tagSelectorRef}
                tabIndex={0}
                className='       
                bg-gravel
                rounded-lg 
                w-full
                absolute
                z-10
                shadow-lg
                shadow-slate-900
                '>
                {istTagInputActive &&
                    user?.tags
                        .filter(tag => !value?.includes(tag))
                        .filter(tag => tag.startsWith(tagInput))
                        .map(tag => (
                            <Tag
                                key={tag}
                                tagName={tag}
                                onClick={selection => {
                                    handleTagClick(selection);
                                    intputRef.current?.focus();
                                }}
                                isClickable
                                isInSelector
                            />
                        ))}
            </div>
        </div>
    );
};

export default TagSelector;
