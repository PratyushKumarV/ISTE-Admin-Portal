import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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
  const submit = document.getElementById('submit_btn');
  submit.addEventListener("click",function(event){
    event.preventDefault();
    const auth = getAuth();
    const email = document .getElementById('email').value;
  const password = document.getElementById('password').value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("Creating");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  })
