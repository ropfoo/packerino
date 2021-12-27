import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import Navbar from './components/Navigation/Navbar';
import Router from './components/Navigation/Router';

function App() {
    const auth = getAuth();
    const { refetch } = useQuery<Auth>('auth', () => getAuth());

    useEffect(() => {
        auth && onAuthStateChanged(auth, () => refetch());
    }, [auth.currentUser]);

    return (
        <>
            <Navbar />
            <Router />
        </>
    );
}

export default App;
