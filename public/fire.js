
import  firebase from  'firebase'
import firestore from 'firebase/firestore'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD3DMsFg_aca2ccCXaqCVPUDJHweM0RzEQ",
    authDomain: "fortnite-65683.firebaseapp.com",
    databaseURL: "https://fortnite-65683.firebaseio.com",
    projectId: "fortnite-65683",
    storageBucket: "fortnite-65683.appspot.com",
    messagingSenderId: "814920848570"
  };


 const firebaseApp= firebase.initializeApp(config);
firebaseApp.firestore().settings({timestampsInSnapshots:true});
//esporto il database----------------------------------------------------------------------------------------------------------------------------

export default firebaseApp.firestore()
