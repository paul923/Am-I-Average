import { firebase } from "@firebase/app";
import "@firebase/firestore";

function initFirebase() {
  firebase.initializeApp({
    apiKey: "AIzaSyAg7M_-b7epJVuMoBcvlUTWct7gFnVIOco",
    authDomain: "am-i-average.firebaseapp.com",
    databaseURL: "https://am-i-average.firebaseio.com",
    projectId: "am-i-average",
    storageBucket: "am-i-average.appspot.com",
    messagingSenderId: "247200672415",
    appId: "1:247200672415:web:75094b7bd1722d82"
  })
  return new Promise((resolve, reject) => {
    firebase.firestore().enablePersistence()
      .then(resolve)
      .catch(err => {
        if (err.code === 'failed-precondition') {
          reject(err)
          // Multiple tabs open, persistence can only be
          // enabled in one tab at a a time.
        } else if (err.code === 'unimplemented') {
          reject(err)
          // The current browser does not support all of
          // the features required to enable persistence
        }
      })
  })
}

export { firebase, initFirebase }
