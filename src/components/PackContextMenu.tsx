import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePacks } from '../hooks/usePacks';
import { Pack } from '../lib/types/pack';
import ContextMenu from './ContextMenu/ContextMenu';
import ContextMenuItem from './ContextMenu/ContextMenuItem';
import DeleteVerification from './Input/DeleteVerification';
import Modal from './Modal';

interface PackContextMenuProps {
    pack?: Pack | null;
}

const PackContextMenu: React.FC<PackContextMenuProps> = ({ pack }) => {
    const navigate = useNavigate();
    const { removePack } = usePacks();

    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);

    return (
        <>
            <ContextMenu>
                <ContextMenuItem
                    onClick={() => {
                        pack && navigate(`/pack/edit/${pack.id}`);
                    }}>
                    edit
                </ContextMenuItem>
                <ContextMenuItem onClick={() => setIsDeleteModalVisible(true)}>
                    delete
                </ContextMenuItem>
            </ContextMenu>
            <Modal
                isVisible={isDeleteModalVisible}
                onBackdropClick={() => setIsDeleteModalVisible(false)}>
                <DeleteVerification
                    verificationString={pack?.title ?? ''}
                    onDelete={() => {
                        if (pack) {
                            removePack(pack.id);
                            navigate(`/packs`);
                        }
                    }}
                />
            </Modal>
        </>
    );
};

export default PackContextMenu;
