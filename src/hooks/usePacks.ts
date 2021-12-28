import { getAuth } from 'firebase/auth';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createPack } from '../helper/pack';
import { addPackData, getPacks } from '../lib/firebase/pack';
import { Pack, PackData } from '../lib/types/pack';
import { useItems } from './useItems';

export function usePacks() {
    const auth = getAuth();
    const { items } = useItems();
    const queryClient = useQueryClient();
    const addPackMutation = useMutation(
        'packs',
        async packData =>
            auth.currentUser && addPackData(packData, auth.currentUser?.uid),
        {
            onMutate: async (packData: PackData) => {
                const prevPacks = queryClient.getQueryData<Pack[]>('packs');
                if (prevPacks) {
                    queryClient.setQueryData<Pack[]>('packs', [
                        ...prevPacks,
                        createPack(packData, items),
                    ]);
                }
                return prevPacks;
            },
        }
    );

    const { data } = useQuery(
        'packs',
        () => auth.currentUser && getPacks(auth.currentUser.uid, items),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            enabled: !!items,
        }
    );

    return {
        packs: data,
        createPack: addPackMutation.mutate,
    };
}
