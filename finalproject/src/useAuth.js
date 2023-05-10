import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "./firebase";

const authContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
}


function useProvideAuth() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
        });
        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    // return user object and auth methods
    return {
        user, 
        /*
        {
        user,
        signin: (email, password) => {
            return auth.signInWithEmailAndPassword(email, password);
        },
        signup: (email, password) => {
            return auth.createUserWithEmailAndPassword(email, password);
        },
        signout: () => {
            return auth.signOut();
        } */
    };
}