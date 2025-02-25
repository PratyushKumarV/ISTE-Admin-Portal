import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDq56HOnhtQK-6ZM-_bgSfeizG7psCCrQw",
    authDomain: "new-login-page-edd85.firebaseapp.com",
    projectId: "new-login-page-edd85",
    storageBucket: "new-login-page-edd85.firebasestorage.app",
    messagingSenderId: "1096206420369",
    appId: "1:1096206420369:web:742de6833cdc455dd57230"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();

  const google_login = document.getElementById("google_btn");
  google_login = addEventListener("click",function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href="./logged.html";
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  })

  