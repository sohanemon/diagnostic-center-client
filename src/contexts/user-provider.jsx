import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase/app";
const User = createContext();
export const useUser = () => useContext(User);
const auth = getAuth(app);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ loading: true });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ loading: false, ...user });
      } else {
      }
    });
    return () => {};
  }, []);

  const createUser = (data) => {
    setUser({ loading: true });
    return createUserWithEmailAndPassword(auth, data.email, data.password);
  };
  const signIn = (data) => {
    setUser({ loading: true });
    return signInWithEmailAndPassword(auth, data.email, data.password);
  };
  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  return (
    <User.Provider value={{ createUser, signIn, user, logOut }}>
      {children}
    </User.Provider>
  );
};

export default UserProvider;
