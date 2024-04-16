'use client'
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth, User } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import AuthContext from './AuthContext';
import { AuthContextProviderProps } from '../../interfaces/AuthContext';
import useAppState from '@/global state management/useAppState';



export const AuthContextProvider:React.FC<AuthContextProviderProps> = ({ children }) => {
    const user = useAppState().user;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // setUser(user);
                console.log(user);
            } else {
                // setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={user}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};