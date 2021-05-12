import firbase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZCLZvQFgDpk2FN9wBEAHJbxo3ZG4WVzI",
    authDomain: "netflix-app-eb33a.firebaseapp.com",
    projectId: "netflix-app-eb33a",
    storageBucket: "netflix-app-eb33a.appspot.com",
    messagingSenderId: "982398240861",
    appId: "1:982398240861:web:b3ac2b18e103ee817765b4"
  };

  const firbaseApp = firbase.initializeApp(firebaseConfig);
  const db = firbaseApp.firestore();
  const auth = firbase.auth();

  export {auth}
  export default db;