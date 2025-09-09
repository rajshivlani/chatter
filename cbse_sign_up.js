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