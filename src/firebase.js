import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBBmE1GxqFMEn0uDEMye9-uBdwE4t31X4g',
  authDomain: 'react-compare-products.firebaseapp.com',
  databaseURL: 'https://react-compare-products.firebaseio.com',
  projectId: 'react-compare-products',
  storageBucket: 'react-compare-products.appspot.com',
  messagingSenderId: '388380689401',
  appId: '1:388380689401:web:d27939ab4b47381fa03328',
  measurementId: 'G-E0SR2DCMZB',
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
