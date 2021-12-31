import { useQuery } from 'react-query';
import { getPack } from '../lib/firebase/pack';
import { useAuth } from './useAuth';
import { useItems } from './useItems';

export function usePack(id: string | undefined) {
    const { authData } = useAuth();
    const { items } = useItems();
    const { data, refetch } = useQuery(
        [id, items],
        () =>
            authData &&
            authData.currentUser &&
            getPack({
                uid: authData.currentUser.uid,
                packId: id ?? '',
                items: items ?? [],
            }),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            enabled: !!items,
        }
    );

    return {
        pack: data,
        refetchPack: refetch,
    };
}
