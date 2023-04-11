
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove, onValue } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

/***** Firebase config *****/
const firebaseConfig = {
    apiKey: "AIzaSyC_jgj9zfAr5KIVQXlKPXby5Od2BOaTnGM",
    authDomain: "rpi-mlx90614-821e6.firebaseapp.com",
    databaseURL: "https://rpi-mlx90614-821e6-default-rtdb.firebaseio.com",
    projectId: "rpi-mlx90614-821e6",
    storageBucket: "rpi-mlx90614-821e6.appspot.com",
    messagingSenderId: "213693056033",
    appId: "1:213693056033:web:cca76584faaa68919b0f60"
};

/***** Initialize Firebase *****/
const app = initializeApp(firebaseConfig);

/***** write data to firebase ****
function write_db() {
    console.log("DEBUG: Write function");
    var db = getDatabase();
    var create_db_table = ref(db, 'level1/' + 'level2/');
    var user_name = document.getElementById("user_name").value;
    var user_password =  document.getElementById("user_name_password").value;
    if( user_name == '' || user_password == ''){
        alert("Make sure, must be non-empty data is required!!!");
        console.log("Make sure, must be non-empty data is required!!!");
        throw "Make sure, must be non-empty data is required!!!";
    }
    set(ref(db,'Check-in/'+user_name), {
      status: user_password
    }).then((res) => {
        console.log();
    })
    .catch((err) => {
        alert(err.message);
        console.log(err.code);
        console.log(err.message);
    })
}*/

/***** read data from firebase *****/
function read_db() {
    var db = getDatabase();
    var connect_db = ref(db, 'Check-in/');
    console.log("DEBUG: Read function");
    onValue(connect_db, (snapshot) => {
        snapshot.forEach(childSnapshot=>{
            let username = childSnapshot.key;
            let status = childSnapshot.val().status;
            console.log("Username: " + username + " Status: " + status );
            sessionStorage.setItem(username,status);
        });
    })
}

/***** call write data function *****/
//var write_data_to_firebase = document.getElementById("write_data_to_firebase");
//write_data_to_firebase.addEventListener('click', write_db);

/***** call read data function *****/
//var read_data_from_firebase = document.getElementById("read_data_from_firebase");
//read_data_from_firebase.addEventListener('click', read_db);