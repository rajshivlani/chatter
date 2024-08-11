var firebaseConfig = {
  apiKey: "AIzaSyAL2_XUliNVNmQeM8sPs7DD7M385zYx-Ow",
  authDomain: "rxdh-36b15.firebaseapp.com",
  databaseURL: "https://rxdh-36b15-default-rtdb.firebaseio.com",
  projectId: "rxdh-36b15",
  storageBucket: "rxdh-36b15.appspot.com",
  messagingSenderId: "236068938161",
  appId: "1:236068938161:web:3fa82886a84ad9a0775d90",
  measurementId: "G-KWKK1TKQ8P"
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
      message_count: 0
    });
    localStorage.setItem("room_name", room_name);
    localStorage.setItem("user_name_main", user_name_temp);
    window.location = "science.html";
  }
}

function getData() {
  firebase.database().ref("Rooms").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      row = "<div class='room_name sub-text prevent-select' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });
}
getData();

function redirectToRoomName(name) {
  firebase.database().ref("Rooms/" + name).push({
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

function shift() {
  firebase.database().ref("IP_SPECIAL_PAGE/").push({
    name: user_name_temp,
    date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
    ip_adress: ip_real,
    time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,
  });
  window.open('maths.html');
  localStorage.setItem("user_name_main", user_name_temp);
}


// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

function check() {
  firebase.database().ref("/").on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = snapshot.val();
      verify = childData;
      dan = verify['danger'];
      if (dan == "no") {

      } else {
        window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
      }
    });
  });
}
setInterval(check, 1000)

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

function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  ip_real = ip;
});