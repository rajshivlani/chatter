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

firebase.initializeApp(firebaseConfig);

function showPassword() {
  var x = document.getElementById("password_entry");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function addUser() {
  password = document.getElementById("password_entry").value;
  user_name = document.getElementById("user_name").value;
  if (user_name == "UK") {
    if (password == "Rajismycutie") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "404error.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
        password: password
      });
      window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
    }
  } else if (user_name == "Hemanshi") {
    if (password == "Hemanshi2808") {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
        password: password
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
    } else {
      window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
    }
  } else if (user_name == " ") {
    if (password == " ") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "english.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
        password: password
      });
      window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
    }

  } else if (user_name == "Idk") {
    if (password == "Hemuismycutie") {
      firebase.database().ref("Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
      });
      localStorage.setItem("user_name_main", user_name);
      window.location = "english.html";
    } else {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
        password: password
      });
      window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
    }

  } else if (user_name == "Temp") {
    if (password == "12") {
      localStorage.setItem("user_name_main", user_name);
      window.location = "english.html";
    } else {
      window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
    }
  } else {
    firebase.database().ref("Failed_Logins/").push({
      name: user_name,
      time: time,
      password: password,
      ip_address: ip_real,
    });
    window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
  }
}

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

function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  ip_real = ip;
});