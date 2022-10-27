import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDoyIDS_N2y1OLE1hKlWplC-MgsliibGgQ",
    authDomain: "godkendelsesopgave-af286.firebaseapp.com",
    projectId: "godkendelsesopgave-af286",
    storageBucket: "godkendelsesopgave-af286.appspot.com",
    messagingSenderId: "753624366199",
    appId: "1:753624366199:web:b0a9f99972119189305a72"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
