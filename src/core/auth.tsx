/* eslint-disable no-console */
import React, { useState, useContext, createContext, ReactNode, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { IAuth, User } from '../models';
import { useAppDispatch } from '../redux/hooks';
import { setUser as setUserDispatch } from '../redux/slices/user.slice';

initializeApp({
  apiKey: 'AIzaSyC_U26Otci648gZLbJAZn-shy4qBQqCjhU',
  authDomain: 'incomes-vizualizer.firebaseapp.com',
  projectId: 'incomes-vizualizer',
  storageBucket: 'incomes-vizualizer.appspot.com',
  messagingSenderId: '409224970295',
  appId: '1:409224970295:web:d2679dbb2a1be645afbfb2',
});

const auth = getAuth();
const authContext = createContext({} as IAuth);

export const ProvideAuth = ({ children }: { children: ReactNode | ReactNode[] }) => {
  const providedAuth = useProvideAuth();
  return <authContext.Provider value={providedAuth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, isLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
        dispatch(setUserDispatch(createUser(user)));
        isLoading(false);
      } else {
        setUser(null);
        isLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');

    try {
      const result = await signInWithPopup(auth, provider);
      const user = createUser(result.user);

      setUser(user);
      dispatch(setUserDispatch(user));
      isLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      dispatch(setUserDispatch({}));
    } catch (err) {
      console.error(err);
    }
  };

  const createUser = (data) => {
    const { displayName: name, email, uid } = data;
    return new User(uid, name, email);
  };

  return {
    user,
    loading,
    signInWithGoogle,
    signOut,
  };
}
