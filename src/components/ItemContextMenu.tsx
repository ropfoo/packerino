import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Item } from '../lib/types/item';
import ContextMenu from './ContextMenu/ContextMenu';
import ContextMenuItem from './ContextMenu/ContextMenuItem';

interface ItemContextMenuProps {
    item?: Item | null;
}

const ItemContextMenu: React.FC<ItemContextMenuProps> = ({ item }) => {
    const navigate = useNavigate();

    return (
        <ContextMenu>
            <ContextMenuItem
                onClick={() => {
                    item && navigate(`/item/edit/${item.id}`);
                }}>
                edit
            </ContextMenuItem>
            <ContextMenuItem
                onClick={() => {
                    // item && navigate(`/item/edit/${item.id}`);
                }}>
                delete
            </ContextMenuItem>
        </ContextMenu>
    );
};

export default ItemContextMenu;
