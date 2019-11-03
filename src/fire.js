import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCtas8V_6rT3uhbc5y8Ivyftc0bufq3LmQ",
    authDomain: "matchup-4a947.firebaseapp.com",
    databaseURL: "https://matchup-4a947.firebaseio.com",
    projectId: "matchup-4a947",
    storageBucket: "matchup-4a947.appspot.com",
    messagingSenderId: "606902680301",
    appId: "1:606902680301:web:c568ac6f99d5c233676ae4",
    measurementId: "G-NTDN6MSTXZ"
  };
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;