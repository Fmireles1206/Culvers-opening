/* Manager Hub Firebase Cloud Messaging service worker */
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

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notification = payload.notification || {};
  const title = notification.title || "Manager Hub";
  const options = {
    body: notification.body || "You have a new Manager Hub notification.",
    data: payload.data || {}
  };

  self.registration.showNotification(title, options);
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow("./")
  );
});
