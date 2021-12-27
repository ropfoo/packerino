import { useField, useFormik, useFormikContext } from 'formik';
import { useState } from 'react';
import { useItems } from '../../hooks/useItems';
import { Item } from '../../lib/types/item';
import ItemSelection from './ItemSelection';

interface ItemSelectorProps {
    name: string;
}

const ItemSelector: React.FC<ItemSelectorProps> = ({ name }) => {
    const { items } = useItems();
    const [selectedItem, setSelectedItem] = useState<Item>();
    const [{}, {}, { setValue }] = useField(name);
    return (
        <div>
            <div>{selectedItem?.title}</div>
            <div className='bg-gravel p-3 rounded-xl w-fit'>
                {items?.map(item => (
                    <ItemSelection
                        key={item.id}
                        item={item}
                        isSelected={selectedItem?.id === item.id}
                        onClick={() => {
                            setSelectedItem(item);
                            setValue(item.id);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ItemSelector;
