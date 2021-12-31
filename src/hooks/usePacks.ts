import { getAuth } from 'firebase/auth';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createPack } from '../helper/pack';
import { setPackData, getPacks } from '../lib/firebase/pack';
import { Pack, PackData } from '../lib/types/pack';
import { useItems } from './useItems';

export function usePacks() {
    const auth = getAuth();
    const { items } = useItems();
    const queryClient = useQueryClient();

    const { data, refetch } = useQuery(
        ['packs', items],
        () => auth.currentUser && getPacks(auth.currentUser.uid, items),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            enabled: !!items,
        }
    );

    const addPackMutation = useMutation(
        ['packs', items],
        async packData =>
            auth.currentUser &&
            setPackData({ pack: packData, uid: auth.currentUser?.uid }),
        {
            onMutate: async (packData: PackData) => {
                refetch();
                const prevPacks = queryClient.getQueryData<Pack[]>([
                    'packs',
                    items,
                ]);
                if (prevPacks) {
                    queryClient.setQueryData<Pack[]>(
                        ['packs', items],
                        [...prevPacks, createPack(packData, items)]
                    );
                }
                return prevPacks;
            },
        }
    );

    return {
        packs: data,
        createPack: addPackMutation.mutate,
    };
}
