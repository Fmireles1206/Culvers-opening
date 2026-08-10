/* Manager Hub Firebase Messaging service worker - registration test */
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyASCO3SJ9xnrqW4Ul1Uo6IQQXA-sI5upKc",
  authDomain: "culvers-opening.firebaseapp.com",
  projectId: "culvers-opening",
  storageBucket: "culvers-opening.firebasestorage.app",
  messagingSenderId: "47928122841",
  appId: "1:47928122841:web:1f6005bbce7fc0dd8a0dc8"
});

firebase.messaging();
