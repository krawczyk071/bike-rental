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

const firebaseConfig = {
  apiKey: "AIzaSyBQE4h5Xb4vhHkIdxA0HnM8YXD1X5pM5lY",
  authDomain: "vanlife-1af79.firebaseapp.com",
  projectId: "vanlife-1af79",
  storageBucket: "vanlife-1af79.appspot.com",
  messagingSenderId: "896927740949",
  appId: "1:896927740949:web:3caf24b8aa9bb10dc38a1c",
  measurementId: "G-5PF9KZDYP8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get all documents in a collectio

export async function getFire() {
  const querySnapshot = await getDocs(collection(db, "bikes1"));
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, " => ", doc.data());
  // });
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  console.log(dataArr);
  return dataArr;
}

// One
export async function getOne(id) {
  const docRef = doc(db, "bikes1", id);
  const oneSnapshot = await getDoc(docRef);
  return {
    ...oneSnapshot.data(),
    id: oneSnapshot.id,
  };
}

// Query
export async function getHostVans() {
  const q = query(collection(db, "bikes1"), where("hostId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}
