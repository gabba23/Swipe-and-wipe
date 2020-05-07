import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCs971xINRB9CpeO57H2L_rVO7OVAu9W9Y",
    authDomain: "webshop-11eea.firebaseapp.com",
    databaseURL: "https://webshop-11eea.firebaseio.com",
    projectId: "webshop-11eea",
    storageBucket: "webshop-11eea.appspot.com",
    messagingSenderId: "99265745913",
    appId: "1:99265745913:web:67a8b98eb49cdfab89e328",
    measurementId: "G-CKNSW4BKWG"
  };
  
  export const fb = firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore()
  export const dbMenuAdd = db.collection('menuItems');
  export const dbOrders = db.collection('orderItems');