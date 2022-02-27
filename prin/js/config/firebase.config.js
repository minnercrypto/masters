var firebaseConfig = {
  apiKey: "AIzaSyAaMqM6cWJp8ATgoHZGDakTLi61ibkzzfs",
  authDomain: "minnermasters-8f467.firebaseapp.com",
  projectId: "minnermasters-8f467",
  storageBucket: "minnermasters-8f467.appspot.com",
  messagingSenderId: "1021272739139",
  appId: "1:1021272739139:web:8866b7be606c5d2cc933f6",
  measurementId: "G-TNGG31BW7B"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();