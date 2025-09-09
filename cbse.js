var firebaseConfig = {
  apiKey: "AIzaSyB6r14nTrVzeD-ecbb61euXbwbwAiWr8o4",
  authDomain: "chatter-fd2a3.firebaseapp.com",
  projectId: "chatter-fd2a3",
  storageBucket: "chatter-fd2a3.firebasestorage.app",
  messagingSenderId: "1037281874763",
  appId: "1:1037281874763:web:0f1c464a7f4c1461810ece",
  measurementId: "G-25JYQYJVGE"
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