import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY_ENV,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN_ENV,
  databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL_ENV,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID_ENV,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET_ENV,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID_ENV,
  appId: process.env.NEXT_PUBLIC_APP_ID_ENV,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
export const firestore = getFirestore(app);
