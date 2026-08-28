var firebaseConfig = {
  apiKey: "AIzaSyA0uBFMuTCBGRgI5ufcjxvfEAqfwk7W1as",
  authDomain: "chatter-5d4af.firebaseapp.com",
  projectId: "chatter-5d4af",
  databaseURL: "https://chatter-5d4af-default-rtdb.firebaseio.com/",
  storageBucket: "chatter-5d4af.firebasestorage.app",
  messagingSenderId: "922494418234",
  appId: "1:922494418234:web:037840d99158bc41212403",
  measurementId: "G-E0M390JQW0"
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
  // password = document.getElementById("password_entry").value;
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("Logins/").push({
    name: user_name,
    time: time,
  });
  localStorage.setItem("user_name_main", user_name);
  window.location = "english.html";
  // if (user_name == "raj") {
  //   if (password == "r") {
  //     firebase.database().ref("Logins/").push({
  //       name: user_name,
  //       time: time,
  //     });
  //     localStorage.setItem("user_name_main", user_name);
  //     window.location = "english.html";
  //   } else {
  //     firebase.database().ref("Failed_Logins/").push({
  //       name: user_name,
  //       time: time,
  //       password: password
  //     });
  //     console.log("wrong password");
  //   }
  // } else if (user_name == "Raj") {
  //   if (password == "r") {
  //     firebase.database().ref("Logins/").push({
  //       name: user_name,
  //       time: time,
  //     });
  //     localStorage.setItem("user_name_main", user_name);
  //     window.location = "english.html";
  //   } else {
  //     firebase.database().ref("Failed_Logins/").push({
  //       name: user_name,
  //       time: time,
  //       password: password
  //     });
  //     window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
  //   }
  // }else if (user_name == "user123") {
  //   if (password == "bits") {
  //     firebase.database().ref("Logins/").push({
  //       name: user_name,
  //       time: time,
  //     });
  //     localStorage.setItem("user_name_main", user_name);
  //     window.location = "english.html";
  //   } else {
  //     firebase.database().ref("Failed_Logins/").push({
  //       name: user_name,
  //       time: time,
  //       password: password
  //     });
  //     window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
  //   }
  // } else if (user_name == " ") {
  //   if (password == " ") {
  //     firebase.database().ref("Logins/").push({
  //       name: user_name,
  //       time: time,
  //     });
  //     localStorage.setItem("user_name_main", user_name);
  //     window.location = "english.html";
  //   } else {
  //     firebase.database().ref("Failed_Logins/").push({
  //       name: user_name,
  //       time: time,
  //       password: password
  //     });
  //     window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
  //   }
  // } else if (user_name == "Temp") {
  //   if (password == "12") {
  //     localStorage.setItem("user_name_main", user_name);
  //     window.location = "english.html";
  //   } else {
  //     window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
  //   }
  // } else {
  //   firebase.database().ref("Failed_Logins/").push({
  //     name: user_name,
  //     time: time,
  //     password: password,
  //   });
  //   window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
  // }
}