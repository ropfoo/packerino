import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useQueryClient } from 'react-query';
import Navbar from './components/Navigation/Navbar';
import Router from './components/Navigation/Router';

function App() {
    const auth = getAuth();
    const queryClient = useQueryClient();
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                queryClient.setQueryData('auth', auth);
            } else {
                queryClient.setQueryData('auth', null);
            }
        });
    }, [auth, auth.currentUser, queryClient]);

    return (
        <>
            <Navbar />
            <Router />
        </>
    );
}

export default App;
