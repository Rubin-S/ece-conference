// -----------------------------------------------------------------------------
// FILE: src/lib/firebase.js
// (Replace the firebaseConfig placeholder values with your project's values)
// Install: npm install firebase
// -----------------------------------------------------------------------------
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1DAmrItkBdbABc_EjngItmsfwMUHKync",
  authDomain: "ic3dcm-94e04.firebaseapp.com",
  projectId: "ic3dcm-94e04",
  storageBucket: "ic3dcm-94e04.firebasestorage.app",
  messagingSenderId: "301611694305",
  appId: "1:301611694305:web:f158a0e3b03b1e67f71fa0"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export async function uploadReceiptFile(file, filename, onProgress) {
  const storageRef = ref(storage, `receipts/${filename}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const pct = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress && onProgress(Math.round(pct));
      },
      (err) => reject(err),
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ url, fullPath: uploadTask.snapshot.ref.fullPath });
      }
    );
  });
}

export async function saveRegistration(registrationPayload) {
  const col = collection(db, "registrations");
  const docRef = await addDoc(col, {
    ...registrationPayload,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}
