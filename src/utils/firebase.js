/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA46Cb4sykpILnpYtzkTAogZW1_rfx44lw',
  authDomain: 'zomato-clone-9cc8a.firebaseapp.com',
  projectId: 'zomato-clone-9cc8a',
  storageBucket: 'zomato-clone-9cc8a.appspot.com',
  messagingSenderId: '643257079490',
  appId: '1:643257079490:web:026f5df7f98784382a4d5b',
  measurementId: 'G-1VTGZ3555P',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
