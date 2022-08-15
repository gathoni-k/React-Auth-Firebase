import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import AuthContext from './AuthContext';

const auth = getAuth();
// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({
    email: null,
    uuid: null,
  });
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const { email, uuid } = user;
        setCurrentUser({ email, uuid });
      }
      return null;
    });
  }, []);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ user: currentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
