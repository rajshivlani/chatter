var firebaseConfig = {
  apiKey: "AIzaSyA0uBFMuTCBGRgI5ufcjxvfEAqfwk7W1as",
  authDomain: "chatter-5d4af.firebaseapp.com",
  projectId: "chatter-5d4af",
  databaseURL: "https://chatter-5d4af-default-rtdb.firebaseio.com/",
  storageBucket: "chatter-5d4af.firebasestorage.app",
  messagingSenderId: "922494418234",
  appId: "1:922494418234:web:037840d99158bc41212403",
  measurementId: "G-E0M390JQW0",
};

var input = document.getElementById("room_name");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add_room").click();
  }
});

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name_main");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  room_name_verify = room_name.includes(" ");
  if (room_name == "") {
    alert("You can't make a room's name blank");
  } else if (room_name_verify == true) {
    alert("Please do not use spaces while making room name's!");
  } else {
    firebase.database().ref("Rooms").child(room_name).update({
      purpose: "adding room name",
      message_count: 0,
    });
    localStorage.setItem("room_name", room_name);
    localStorage.setItem("user_name_main", user_name_temp);
    window.location = "science.html";
  }
}

function getData() {
  firebase
    .database()
    .ref("Rooms")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        row =
          "<div class='room_name sub-text prevent-select' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >#" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}
setInterval(getData, 1000);

function redirectToRoomName(name) {
  firebase
    .database()
    .ref("Rooms/" + name)
    .push({
      name: "SERVER",
      message: user_name_temp + " has logged in to room " + name,
      date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
      time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,
    });
  localStorage.setItem("user_name_main", user_name_temp);
  localStorage.setItem("room_name", name);
  window.location = "science.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function back() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}

function refreshTime() {
  datedate1 = new Date().getDate();
  datemonth = new Date().getMonth();
  dateyear1 = new Date().getFullYear();
  datehour1 = new Date().getHours();
  datemin1 = new Date().getMinutes();
  datesec1 = new Date().getSeconds();
  datemonth1 = datemonth + 1;
}
setInterval(refreshTime, 1000);

user_name_temp = localStorage.getItem("user_name_main");

function verify() {
  if (user_name_temp == "Temp") {
  } else {
    localStorage.setItem("user_name_main", " ");
  }
  if (user_name_temp != " ") {
  } else {
    window.location.replace("index.html");
  }
}
setInterval(verify, 5000);
