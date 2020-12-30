import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyB8bNUtS8NZa9FBzKInJ04H2ukHkdKFafE",
    authDomain: "linkedin-clone-yt-c0b78.firebaseapp.com",
    projectId: "linkedin-clone-yt-c0b78",
    storageBucket: "linkedin-clone-yt-c0b78.appspot.com",
    messagingSenderId: "904457681136",
    appId: "1:904457681136:web:0befd14d973a53fe822a35",
    measurementId: "G-SN2N13VHXZ"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db,auth};