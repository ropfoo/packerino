import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pack } from '../lib/types/pack';
import ContextMenu from './ContextMenu/ContextMenu';
import ContextMenuItem from './ContextMenu/ContextMenuItem';

interface PackContextMenuProps {
    pack?: Pack | null;
}

const PackContextMenu: React.FC<PackContextMenuProps> = ({ pack }) => {
    const navigate = useNavigate();

    return (
        <ContextMenu>
            <ContextMenuItem
                onClick={() => {
                    pack && navigate(`/pack/edit/${pack.id}`);
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

export default PackContextMenu;
