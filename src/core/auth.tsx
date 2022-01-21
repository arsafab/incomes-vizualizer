/* eslint-disable no-console */
import React, { useState, useEffect, useContext, createContext, ReactNode } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { IAuth, User } from '../models';
// import { getFirestore } from 'firebase/firestore';

initializeApp({
  apiKey: 'AIzaSyC_U26Otci648gZLbJAZn-shy4qBQqCjhU',
  authDomain: 'incomes-vizualizer.firebaseapp.com',
  projectId: 'incomes-vizualizer',
  storageBucket: 'incomes-vizualizer.appspot.com',
  messagingSenderId: '409224970295',
  appId: '1:409224970295:web:d2679dbb2a1be645afbfb2',
});

const auth = getAuth();
// const db = getFirestore();
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

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
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
      const { displayName: name, email, uid } = result.user;
      const user = new User(uid, name, email);

      // This gives you a Google Access Token.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;

      setUser(user);
      isLoading(false);

      // const query = await db.collection('users').where('uid', '==', user.uid).get();
      // if (query.docs.length === 0) {
      //   await db.collection('users').add({
      //     uid: user.uid,
      //     name: user.displayName,
      //     authProvider: 'google',
      //     email: user.email,
      //   });
      // }
    } catch (err) {
      console.error(err);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    user,
    loading,
    signInWithGoogle,
    signOut,
  };
}
