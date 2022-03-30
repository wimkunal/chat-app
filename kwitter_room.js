// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAAHvVLf7rMEqF8PbKPSPOTRhFz0rl5Ic",
    authDomain: "kwitter-project-database.firebaseapp.com",
    projectId: "kwitter-project-database",
    storageBucket: "kwitter-project-database.appspot.com",
    messagingSenderId: "283206647085",
    appId: "1:283206647085:web:f28080450e4cb2491ee7a4"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();