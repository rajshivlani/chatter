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
  if (user_name == "raj_shivlani") {
    if (password == "Owner") {
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
      console.log("wrong password");
    }
  } else if (user_name == "Raj") {
    if (password == "raj") {
      firebase.database().ref("Failed_Logins/").push({
        name: user_name,
        time: time,
        ip_address: ip_real,
        password: password
      });
      localStorage.setItem("user_name_main", user_name);
    } else {}
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