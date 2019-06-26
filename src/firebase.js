import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAg7M_-b7epJVuMoBcvlUTWct7gFnVIOco",
  authDomain: "am-i-average.firebaseapp.com",
  databaseURL: "https://am-i-average.firebaseio.com",
  projectId: "am-i-average",
  storageBucket: "am-i-average.appspot.com",
  messagingSenderId: "247200672415",
  appId: "1:247200672415:web:75094b7bd1722d82"
});

export const db = firebaseApp.firestore();