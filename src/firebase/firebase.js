// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyC3gF_Fkn2NKzIiw79uelhUwZubAraYhFA",
	authDomain: "instagram-clone-af8b3.firebaseapp.com",
	projectId: "instagram-clone-af8b3",
	storageBucket: "instagram-clone-af8b3.appspot.com",
	messagingSenderId: "485423914643",
	appId: "1:485423914643:web:0650249e47a29644f37766",
	measurementId: "G-JF70HWJL4J",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, fireStore, storage };
