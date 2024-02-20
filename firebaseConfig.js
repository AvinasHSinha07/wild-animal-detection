import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdqJ28uvLYkKQrZe2kMxU_Ihuwy8flY74",

  authDomain: "wild-animal-detection-28089.firebaseapp.com",

  projectId: "wild-animal-detection-28089",

  storageBucket: "wild-animal-detection-28089.appspot.com",

  messagingSenderId: "409969280958",

  appId: "1:409969280958:web:c82d26a76bcec34e335bef",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
