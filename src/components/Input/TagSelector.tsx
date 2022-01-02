import { useField } from 'formik';
import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import Tag from '../Tag';

interface TagSelectorProps {
    name: string;
}

const TagSelector: React.FC<TagSelectorProps> = ({ name }) => {
    const { user, updateTags } = useUser();
    const [{ value }, , { setValue }] = useField<string[]>(name);
    const [tagInput, setTagInput] = useState('');

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' && user) {
            if (tagInput) {
                updateTags([...user.tags, tagInput]);
                setTagInput('');
            }
        }
    };

    return (
        <div className='flex flex-wrap'>
            {user?.tags.map(tag => (
                <Tag
                    tagName={tag}
                    isSelected={value && value.includes(tag)}
                    onClick={selection => {
                        if (value) {
                            value.includes(selection)
                                ? setValue(
                                      value.filter(val => val !== selection)
                                  )
                                : setValue([...value, selection]);
                        } else {
                            setValue([selection]);
                        }
                    }}
                    isClickable
                    key={tag}>
                    {tag}
                </Tag>
            ))}
            <input
                type=''
                className='max-w-fit'
                value={tagInput}
                onKeyDown={handleKeyDown}
                onChange={e => setTagInput(e.target.value)}
            />
        </div>
    );
};

export default TagSelector;
