import { useMutation, useQuery, useQueryClient } from 'react-query';
import { setItem, getItems, removeItem } from '../lib/firebase/item';
import { Item } from '../lib/types/item';
import { useAuth } from './useAuth';

export function useItems() {
    const { authData } = useAuth();
    const queryClient = useQueryClient();

    const { data, isLoading, refetch } = useQuery(
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

    const createItemMutation = useMutation(
        async item => {
            return (
                authData &&
                authData.currentUser &&
                setItem(item, authData.currentUser.uid)
            );
        },
        {
            onMutate: async (item: Item) => {
                refetch();
                const prevItems = queryClient.getQueryData<Item[]>([
                    'items',
                    authData,
                ]);

                if (prevItems) {
                    queryClient.setQueryData<Item[]>(
                        ['items', authData],
                        [...prevItems, item]
                    );
                }

                return prevItems;
            },
        }
    );

    const removeItemMutation = useMutation(
        async itemId => {
            return (
                authData &&
                authData.currentUser &&
                removeItem(authData.currentUser.uid, itemId)
            );
        },

        {
            onMutate: async (itemId: string) => {
                const prevItems = queryClient.getQueryData<Item[]>([
                    'items',
                    authData,
                ]);

                if (prevItems) {
                    const filteredItems = prevItems.filter(
                        item => item.id !== itemId
                    );
                    queryClient.setQueryData<Item[]>(
                        ['items', authData],
                        filteredItems
                    );
                }

                return prevItems;
            },
        }
    );

    return {
        createItem: createItemMutation.mutate,
        removeItem: removeItemMutation.mutate,
        items: data,
        isLoading,
    };
}
