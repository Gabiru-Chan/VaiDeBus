import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyARQPo7hcdINbaqxU6pL8IobxSYvFsnnos",
  authDomain: "conecbasedata.firebaseapp.com",
  projectId: "conecbasedata",
  storageBucket: "conecbasedata.appspot.com",
  messagingSenderId: "704248042446",
  appId: "1:704248042446:web:46817fac4b0b3bc79b919f",
  measurementId: "G-KGY720SDCJ"
};

if(!firebase.apps.length){
  //Abrir uma conexão conexao
  firebase.initializeApp(firebaseConfig);
}

export default firebase;