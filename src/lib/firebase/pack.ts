import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';
import { createPack } from '../../helper/pack';
import { Item } from '../types/item';
import { PackData } from '../types/pack';
import { db } from './app';

export const setPackData = async ({
    pack,
    uid,
}: {
    pack: PackData;
    uid: string;
}) => {
    if (pack.id) {
        // update
        return await setDoc(doc(db, `user/${uid}/packs/${pack.id}`), pack);
    }
    const packRef = doc(collection(db, `user/${uid}/packs`));
    pack.id = packRef.id;
    return await setDoc(packRef, pack);
};

export const getPack = async ({
    uid,
    packId,
    items,
}: {
    uid: string;
    packId: string;
    items: Item[];
}) => {
    const packsDataRef = doc(db, `user/${uid}/packs/${packId}`);
    const packDataSnap = await getDoc(packsDataRef);
    const packData = packDataSnap.data() as PackData;
    return createPack(packData, items);
};

export const getPacks = async (uid: string, items?: Item[] | null) => {
    const packsDataRef = collection(db, `user/${uid}/packs`);
    const packsDataSnap = await getDocs(packsDataRef);
    const packsDataList = packsDataSnap.docs.map(doc =>
        doc.data()
    ) as PackData[];
    const packsList = packsDataList.map(packData =>
        createPack(packData, items)
    );
    return packsList;
};
