import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

// Register user with email
export const registerUserEmail = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return null;
  } catch (error) {
    let errorMessage;
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'Email already in use';
    } else {
      errorMessage = error.message;
    }
    return errorMessage;
  }
};

// Sign in users with email
export const signinEmail = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return null;
  } catch (error) {
    let errorMessage = error.message;
    if (error.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect email or password';
    }
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'Incorrect email or password';
    }

    return errorMessage;
  }
};
