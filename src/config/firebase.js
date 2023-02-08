// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDEXQye6_d5FvY70I2O12b8wqVll643m88',
  authDomain: 'blog-b64f2.firebaseapp.com',
  databaseURL:
    'https://blog-b64f2-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'blog-b64f2',
  storageBucket: 'blog-b64f2.appspot.com',
  messagingSenderId: '37710916388',
  appId: '1:37710916388:web:0de5a704dc897e8c9aa1b1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
