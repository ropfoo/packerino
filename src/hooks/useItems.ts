import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addItem, getItems } from '../lib/firebase/item';
import { Item } from '../lib/types/item';
import { useAuth } from './useAuth';

export function useItems() {
    const { authData } = useAuth();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        async item => {
            return (
                authData &&
                authData.currentUser &&
                addItem(item, authData.currentUser.uid)
            );
        },
        {
            onMutate: async (item: Item) => {
                const prevItems = queryClient.getQueryData<Item[]>('items');

                if (prevItems) {
                    queryClient.setQueryData<Item[]>('items', [
                        ...prevItems,
                        item,
                    ]);
                }

                return prevItems;
            },
        }
    );

    const { data } = useQuery(
        ['items', authData],
        () =>
            authData &&
            authData.currentUser &&
            getItems(authData.currentUser.uid),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
            enabled: !!authData?.currentUser,
        }
    );

    return {
        createItem: mutate,
        items: data,
    };
}
