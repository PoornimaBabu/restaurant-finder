import firebase from 'firebase/app'
import "firebase/firestore";


// Your web app's Firebase configuration

   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGgP5Nm46xKe3GCAIlCImAWVZxwhTJeBQ",
    authDomain: "restaurant-finder-47530.firebaseapp.com",
    projectId: "restaurant-finder-47530",
    storageBucket: "restaurant-finder-47530.appspot.com",
    messagingSenderId: "448348467283",
    appId: "1:448348467283:web:c3d973a72a33e0049216a6",
    measurementId: "G-9VVPHDZ4PK"
  };

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 export default firebase;