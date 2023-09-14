import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "../styles/globals.scss";
import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import axios from "axios";
import AppContext from "../context/appContext";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtRC3YhYUEnUXWwosekdN2Cty8eG5r6PI",
  authDomain: "innovix-official.firebaseapp.com",
  projectId: "innovix-official",
  storageBucket: "innovix-official.appspot.com",
  messagingSenderId: "100292758688",
  appId: "1:100292758688:web:e3ff21cbf8580e438f0dc5",
  measurementId: "G-KF993HFDQ1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function MyApp({ Component, pageProps }) {
  const [nameContext, setNameContext] = useState("seid");
  const [datas, setDatas] = useState([]);
  const [services, setServices] = useState([]);
  const [portfolios, setPortfolios] = useState([]);

  async function getFirebaseDatas(collectionName, setUseState) {
    try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const firebaseData = querySnapshot.docs.map((doc) => doc.data());
      setUseState(firebaseData);
    } catch (error) {
      console.error("Error fetching Firebase data:", error);
    }
  }

  useEffect(() => {
    getFirebaseDatas("services", setServices);
    getFirebaseDatas("portfolio", setPortfolios);
  }, []);

  useEffect(() => {
    console.log(services);
  }, [services]);

  return (
    <AppContext.Provider
      value={{ nameContext, setNameContext, services, portfolios }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
