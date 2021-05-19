import firebase from 'firebase/app'; /* import all from firebase as firebase */
import 'firebase/storage'; /* storage */
import 'firebase/firestore'; /* database */

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyDLeY8UK7qM0N1Eth498-9-Cbu_HjlEWu8",
	authDomain: "firegram-cf1bc.firebaseapp.com",
	projectId: "firegram-cf1bc",
	storageBucket: "firegram-cf1bc.appspot.com",
	messagingSenderId: "1076722971197",
	appId: "1:1076722971197:web:5b7f94c9666bfefff7f054"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize firebase storage
const projectStorage = firebase.storage();
// Initialize firebase database
const projectFirestore = firebase.firestore()
// Create a firebase timestamp
const  timestamp = firebase.firestore.FieldValue.serverTimestamp;

// Export the services
export { projectStorage, projectFirestore, timestamp }