importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.5/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "AIzaSyASCO3SJ9xnrqW4Ul1Uo6IQQXA-sI5upKc",
  authDomain: "culvers-opening.firebaseapp.com",
  projectId: "culvers-opening",
  storageBucket: "culvers-opening.firebasestorage.app",
  messagingSenderId: "47928122841",
  appId: "1:47928122841:web:1f6005bbce7fc0dd8a0dc8"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const n = payload.notification || {};
  self.registration.showNotification(n.title || "Manager Hub", {
    body: n.body || "New Manager Hub notification",
    icon: "./icon-192.png",
    data: { url: self.registration.scope }
  });
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data?.url || self.registration.scope));
});
