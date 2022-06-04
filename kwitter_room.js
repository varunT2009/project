
const firebaseConfig = {
  apiKey: "AIzaSyBvutTWF8T9zWeLMuFWFtlyHlblM4Ig2hY",
  authDomain: "kwitter-41d39.firebaseapp.com",
  databaseURL: "https://kwitter-41d39-default-rtdb.firebaseio.com",
  projectId: "kwitter-41d39",
  storageBucket: "kwitter-41d39.appspot.com",
  messagingSenderId: "26045239602",
  appId: "1:26045239602:web:19a85d6d96dbd0d257072b",
  measurementId: "G-GX9S1XW6GM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name;
function addRoom(){
  room_name=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({ purpose : "adding roomname" });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
    console.log(Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";

    }
    function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
   window.location="index.html";
    }