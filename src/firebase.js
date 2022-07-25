// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL9VdUCY0MkB4YIA2GYBi-W8h8DLCmMvU",
  authDomain: "instaclone-e0ae6.firebaseapp.com",
  projectId: "instaclone-e0ae6",
  storageBucket: "instaclone-e0ae6.appspot.com",
  messagingSenderId: "3978478731",
  appId: "1:3978478731:web:29eee1fd242c3ba078c08e",
  measurementId: "G-1BNPCB0P8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export const login = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response.user);
    } catch (err) {
        toast.error(err.code);
    }
}
