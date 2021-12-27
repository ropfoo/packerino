import { getAuth } from 'firebase/auth';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { addItem, getItems } from '../lib/firebase/item';
import { Item } from '../lib/types/item';

export function useItems() {
    const auth = getAuth();
    const queryClient = useQueryClient();

    const { mutate } = useMutation(
        async item => {
            return auth.currentUser && addItem(item, auth.currentUser.uid);
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
        'items',
        () => auth.currentUser && getItems(auth.currentUser.uid),
        {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        }
    );

    return {
        createItem: mutate,
        items: data,
    };
}
