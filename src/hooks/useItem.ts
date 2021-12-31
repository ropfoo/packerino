import { useQuery } from 'react-query';
import { getItem } from '../lib/firebase/item';
import { useAuth } from './useAuth';

export function useItem(id: string | undefined) {
    const { authData } = useAuth();
    const { data, isLoading, refetch } = useQuery(
        [id, authData],
        () =>
            authData &&
            authData.currentUser &&
            getItem(authData.currentUser.uid, id ?? ''),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            enabled: !!authData?.currentUser,
        }
    );

    return {
        item: data,
        refetchItem: refetch,
        isLoading,
    };
}
