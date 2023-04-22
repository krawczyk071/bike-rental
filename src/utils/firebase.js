// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore/lite";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPQU3apGzS-WESFtzKRG_NLOP4IomNknQ",
  authDomain: "bikerental-a6976.firebaseapp.com",
  projectId: "bikerental-a6976",
  storageBucket: "bikerental-a6976.appspot.com",
  messagingSenderId: "27709411238",
  appId: "1:27709411238:web:83372d6cfdd32e0a764967",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//Auth init
export const auth = getAuth();

const colRef = collection(db, "main");
// Get all documents in a collectio

//All
export async function getFire() {
  const querySnapshot = await getDocs(colRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  // console.log(dataArr);

  return dataArr;
}

// One
export async function getOne(id) {
  const docRef = doc(db, "main", id);
  const oneSnapshot = await getDoc(docRef);
  return {
    ...oneSnapshot.data(),
    id: oneSnapshot.id,
  };
}

// Query
export async function getSelected() {
  const q = query(colRef, where("price.current_retail", ">", 300));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

// AUTH LOGIN
// createUserWithEmailAndPassword:

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// signInWithEmailAndPassword
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// const auth = getAuth();
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// signOut:
//   import { getAuth, signOut } from "firebase/auth";

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

export async function fbLogin(user, pwd) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, user, pwd);
    console.log(userCredential);
    return userCredential.user;
  } catch (error) {
    console.log("moj", error);
  }
}
export async function fbSignup(user, pwd) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      user,
      pwd
    );
    console.log(userCredential);
    return userCredential.user;
  } catch (error) {
    console.log(error);
  }
}
export async function fbLogout() {
  try {
    await signOut(auth);
    console.log("Logged out");
  } catch (error) {
    console.log(error);
  }
}
