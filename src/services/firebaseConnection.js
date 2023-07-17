import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAwVWrpvU55-lc0PSVu2PJvG303m0kqQE8",
  authDomain: "conectransv2.firebaseapp.com",
  projectId: "conectransv2",
  storageBucket: "conectransv2.appspot.com",
  messagingSenderId: "1040878227678",
  appId: "1:1040878227678:web:5d45b90ef86e8f8ff3b24f",
  measurementId: "G-67ZY87EBMM"
};

if(!firebase.apps.length){
  //Abrir uma conexão conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;