import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAtRC3YhYUEnUXWwosekdN2Cty8eG5r6PI",
  authDomain: "innovix-official.firebaseapp.com",
  projectId: "innovix-official",
  storageBucket: "innovix-official.appspot.com",
  messagingSenderId: "100292758688",
  appId: "1:100292758688:web:e3ff21cbf8580e438f0dc5",
  measurementId: "G-KF993HFDQ1",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

db.collection("datas");
