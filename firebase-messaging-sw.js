console.log('firebase-messaging-sw.js');
// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyD9_0I_o2myJQOztMhXlcm7ddC1cMLyB9w",
  authDomain: "mzdao-pwa-push-dev.firebaseapp.com",
  projectId: "mzdao-pwa-push-dev",
  storageBucket: "mzdao-pwa-push-dev.appspot.com",
  messagingSenderId: "421211378761",
  appId: "1:421211378761:web:1f50b9f4b766b2acc79b98"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
