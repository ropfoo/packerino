import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Auth } from './AuthTypes';

interface AuthContext {
    userAuth: Auth | null;
    setUserAuth: React.Dispatch<React.SetStateAction<Auth | null>> | null;
}

const AuthContext = React.createContext<AuthContext>({
    userAuth: null,
    setUserAuth: null,
});

export const useAuthContext = () => React.useContext(AuthContext);

export const AuthProvider: React.FC = ({ children }) => {
    const auth = getAuth();
    const [userAuth, setUserAuth] = useState<Auth | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUserAuth({
                    email: user.email,
                    uid: user.uid,
                });
            } else {
                // User is signed out
                // ...
            }
        });
    }, [auth.currentUser]);

    return (
        <AuthContext.Provider value={{ userAuth, setUserAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
