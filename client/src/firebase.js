// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "emoteion-blog.firebaseapp.com",
  projectId: "emoteion-blog",
  storageBucket: "emoteion-blog.firebasestorage.app",
  messagingSenderId: "629822637824",
  appId: "1:629822637824:web:c1812bb13158302f0755e5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
