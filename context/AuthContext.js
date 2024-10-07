// context/AuthContext.js
import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../lib/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Para manejar Firestore

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null); // Almacenar los datos adicionales del usuario

  const register = async (email, password, firstName, lastName, birthDate) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar los datos adicionales en Firestore
    await setDoc(doc(db, 'users', user.uid), {
      firstName,
      lastName,
      birthDate,
      email: user.email,
      uid: user.uid,
    });

    setCurrentUser(user);
    setUserData({ firstName, lastName, birthDate }); // Almacenar los datos en el estado
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Obtener los datos del usuario desde Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));
    if (userDoc.exists()) {
      setUserData(userDoc.data()); // Guardar los datos en el estado
    }

    setCurrentUser(user);
  };

  const logout = async () => {
    await signOut(auth);
    setCurrentUser(null);
    setUserData(null); // Limpiar los datos del usuario al cerrar sesión
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    userData, // Exponer los datos adicionales del usuario
    register,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
