import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAacL-Aq_XoV2R-Crxfb2SHBtIi2v61v_g",
  authDomain: "whico-93ac6.firebaseapp.com",
  projectId: "whico-93ac6",
});

const db = getFirestore(firebaseApp);

export default db