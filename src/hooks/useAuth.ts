import { Auth, getAuth } from 'firebase/auth';
import { useQuery } from 'react-query';

export function useAuth() {
    const authQuery = useQuery<Auth>('auth', () => getAuth(), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
    });

    return {
        authData: authQuery.data,
    };
}
