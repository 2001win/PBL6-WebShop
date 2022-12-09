import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyDjiZ1w6-G21qd8lh7X3CESHeiH6DhnSPo",
  authDomain: "pbl6-eshop.firebaseapp.com",
  projectId: "pbl6-eshop",
  storageBucket: "pbl6-eshop.appspot.com",
  messagingSenderId: "844666068379",
  appId: "1:844666068379:web:f01b55ceb2e54378f8553e",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
