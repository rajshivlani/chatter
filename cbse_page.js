//VERSION
let version_present = "0.1.11";

//firebase loading
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

//var firebaseConfig = {
// apiKey: "AIzaSyD4067qYAl5V7vx-lDA70bV5l2RgJpeiKc",
// authDomain: "test-2973c.firebaseapp.com",
// databaseURL: "https://test-2973c-default-rtdb.firebaseio.com",
// projectId: "test-2973c",
//storageBucket: "test-2973c.appspot.com",
//messagingSenderId: "347370851293",
//appId: "1:347370851293:web:965ae0f9ae053e9f894434",
//measurementId: "G-9Z62YYHZQJ"
//};
firebase.initializeApp(firebaseConfig);

//predefined value/variables setting
user_name = localStorage.getItem("user_name_main");
room_name = localStorage.getItem("room_name");
user_name_temp = localStorage.getItem("user_name_main");
let reply_text = "";
let hide_system_message = "no";
let unloading_yes = "true";
let log_out = "true";
let message_count = 0;
document.getElementById("room_name_display").innerHTML = room_name;
//time
function refreshTime() {
  datedate1 = new Date().getDate();
  datemonth = new Date().getMonth();
  dateyear1 = new Date().getFullYear();
  datemin1 = new Date().getMinutes();
  datesec1 = new Date().getSeconds();
  datehour1 = new Date().getHours();
  datemonth1 = datemonth + 1;
  time = "Date:" + datedate1 + "/" + datemonth1 + "/" + dateyear1 + " ~ Time:" + datehour1 + ":" + datemin1 + "." + datesec1;
}
setInterval(refreshTime, 1000);

//send a message
function send() {
  msg1 = document.getElementById("msg").value;
  //EMOJIS
  msg = msg1.replaceAll(":kissing_face_heart:", "😘").replaceAll(":kissing_face:", "😙").replaceAll(":smile_face:", "😀").replaceAll(":cute_face:", "🥺").replaceAll(":smile_face_with_hearts:", "🥰").replaceAll(":sparkling_heart:", "💖").replaceAll(":laughing_face:", "😂").replaceAll(":crying_face:", "😭").replaceAll("'", "").replaceAll("/img ", "<img class=image_50 src=");
  //Commands
  if (msg == "/reset_database") {
    firebase.database().ref().remove();
    firebase.database().ref().update({
      danger: "no",
    });
    document.getElementById("msg").value = "";
  } else if (msg == "/reset") {
    reset();
  } else if (msg == "/bye") {
    firebase.database().ref("/").remove();
    document.getElementById("msg").value = "";
    firebase.database().ref().update({
      danger: "no",
      version: version_present
    });
    sneakLogout();
  } else if (msg == "/get_message_count") {
    msg_count_check();
    document.getElementById("msg").value = "";
    showSnackbar("Message count is " + msg_count + "!");
    //alert("Message count is " + msg_count + "!");
  } else if (msg == "/hide_system_messages") {
    hide_system_message = "yes";
    document.getElementById("msg").value = "";
    getData();
  } else if (msg == "/show_system_messages") {
    hide_system_message = "no";
    document.getElementById("msg").value = "";
    getData();
  } else if (msg != "") {
    msg_check_space = msg;
    msg_check_space = msg_check_space.replaceAll(" ", "");
    if (msg_check_space != "") {
      //sending message
      msg_count = msg_count0 + 1;
      firebase.database().ref("Rooms/" + room_name).push({
        name: user_name,
        message: msg,
        time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1 + " Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
        replying: reply_text,
      });
      firebase.database().ref("Rooms/" + room_name).update({
        message_count: msg_count
      });
      //resetting values after message sent
      document.getElementById("msg").value = "";
      document.getElementById("send_text").innerHTML = "Send:";
      reply_text = "";
      replying_id = "";
      window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
      });
    } else {
      showSnackbar("Message must contain a message");
      //alert("Message must contain a message");
      document.getElementById("msg").value = "";
    }

  } else {
    //blank message error
    showSnackbar("You can't send a blank message!");
    //alert("You can't send a blank message!");
  }
};


//recieving data and displaying it
getData();

function getData() {
  firebase.database().ref("Rooms/" + room_name).orderByChild("timestamp").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (snapshot) {
      childKey = snapshot.key;
      childData = snapshot.val();
      if (childKey != "purpose") {
        row = document.createElement("h6");
        firebase_message_id = childKey;
        message_data = childData;
        //getting values and setting variables
        name = message_data['name'];
        message = message_data['message'];
        like = message_data['like'];
        time = message_data['time'];
        replying = message_data['replying'];
        //message display type
        if (name == "SERVER") { //system message display
          if (hide_system_message == "no") { //checking if system messages are to be displayed to the user
            name_with_tag2 = "<h4 class='prevent-select'> " + name + "</h4>"; //name
            message_with_tag2 = "<h4 style='	align-items: center;' class='message_h4 sub-text' id=' " + message + " ' onclick='copyText(this.id)'>" + message + "</h4>"; //message
            time2 = "<h6 style='text-align: right;float: right;' class='prevent-select'>" + time + "</h6>"; //time
            hidden_button = "<button style='visibility: hidden;' class='prevent-select'>~</button>"; //hidden button
            row2 = "<center><div>" + name_with_tag2 + message_with_tag2 + "</div></center>"; //compiling the message with format
            final2 = time2 += row2; //adding time format with the message
            document.getElementById("output").innerHTML += final2; //displaying the message
          } else {}
        } else if (name == "undefined") {

        } else {
          //message display with replying text
          name_with_tag = "<h4 class='prevent-select'> " + name + "</h4>"; //name
          if (replying == "") {
            reply_text_box = ""; //replying text box
          } else {
            reply_text_box = "<h4 class='replying_text_css' style=' text-decoration:none;'>&nbsp" + replying + "&nbsp</h4>"; //replying text box
          }
          message_with_tag = "<h4 class='message_h4 sub-text' id=' " + message + " '>" + message + "</h4>"; //message
          hidden_button = "<button style='visibility: hidden;' class='prevent-select'>~</button>"; //hidden button
          reply_button = "<button class='btn btn-success prevent-select' id='" + firebase_message_id + "' value='" + message + "' onclick='replyText(this.id)'>Reply</button>"; //reply button
          //delete button display option
          if (name == user_name_temp) {
            //delete button visible as message sent by user
            delete_button = "<button class='btn btn-danger prevent-select' id='" + firebase_message_id + "__'style='float: right;' value='" + firebase_message_id + "' name='" + name + "'onclick='hideMessage(this.id)'>Delete</button><hr class='prevent-select'>";
          } else {
            //delete button invisible as message not sent by user
            delete_button = "<hr class='prevent-select'>";
          }
          time = "<h6 style='text-align: right;float: right;' class='prevent-select'>" + time + " </h6>"; //time
          row = "<div>" + name_with_tag + reply_text_box + message_with_tag + reply_button + hidden_button + delete_button + "</div>"; //compiling the message with format
          final = time += row; //adding time format with the message
          document.getElementById("output").innerHTML += final; //displaying the message
        }
      }
    });
  });
}

//deleting a message onclick of user
function hideMessage(message_id) {
  button_id = message_id;
  msg_id = document.getElementById(message_id).value;
  firebase.database().ref("Rooms/" + room_name).child(msg_id).remove();
}

//replying to a message and making appropriate changes
function replyText(message_id1) {
  name_temp = user_name;
  reply_text = document.getElementById(message_id1).value;
  replying = reply_text;
  document.getElementById("send_text").innerHTML = "Replying to " + reply_text;
  document.getElementById("send_text").setAttribute("style", " font-size: medium;");
}

//resetting the reply if user remove the reply text
function resetReply() {
  reply_text = "";
  document.getElementById("send_text").innerHTML = "Send:";
}

//logging out user
function logout() {
  firebase.database().ref("Rooms/" + room_name).push({
    name: "SERVER",
    message: user_name + " has logged out",
    date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
    time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,
  });
  unloading_yes = "false";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
};

function sneakLogout() {
  unloading_yes = "false";
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
};

//sending user to room page
function back() {
  firebase.database().ref("Rooms/" + room_name).push({
    name: "SERVER",
    message: user_name + " has left the room",
    date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
    time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,
  });
  unloading_yes = "false";
  window.location.replace("english.html");
  localStorage.setItem("user_name_main", user_name_temp);
};

//resetting the room (deleting all messages)
function reset() {
  reply_text = "";
  document.getElementById("send_text").innerHTML = "Send:";
  firebase.database().ref("Rooms/" + room_name).remove();
  firebase.database().ref("Rooms/" + room_name).push({
    name: "SERVER",
    message: user_name + " has reset the this room",
    date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
    time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,
  });
  msg_count = 0;
  msg_count0 = 0;
  firebase.database().ref("Rooms/" + room_name).update({
    message_count: msg_count
  });
};

function isKeyPressed(event) {
  // 13 is the keycode for "enter"
  if (event.keyCode == 13 && event.shiftKey) {
    document.getElementById("msg").value += "<br>";
  }
  if (event.keyCode == 13 && !event.shiftKey) {
    event.preventDefault();
    document.getElementById("send-button").click();
  }
}

//closing down the site
function shutDown() {
  firebase.database().ref().update({
    danger: time,
    version: version_present
  });
};

//message count
function msg_count_check() {
  firebase.database().ref("Rooms/" + room_name).on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = snapshot.val();
      verify = childData;
      msg_count0 = verify['message_count'];
      console.log(msg_count0);
      if (msg_count0 > 150) {
        document.getElementById("msg_counter").innerHTML = "150+ msg";
      } else {
        document.getElementById("msg_counter").innerHTML = "";
      }
    });
  });
}
msg_count_check();

//emergency panic button
body1.addEventListener("keypress", function (event) {
  if (event.key === ";") {
    window.location.replace("https://www.learncbse.in/ncert-solutions-class-10-science/");
    firebase.database().ref("Rooms/" + room_name).remove();
    firebase.database().ref("Rooms/" + room_name).push({
      name: "SERVER",
      message: user_name + " has been logged out using ';' key",
      date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
      time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,

    });
    msg_count = 0;
    msg_count0 = 0;
    firebase.database().ref("Rooms/" + room_name).update({
      message_count: msg_count
    });
  }
});

//DISABLING ALL DEVELOPER TOOLS SHORTCUTS
// Disable right-click
document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
};
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

//chechking if the site is allowed to use by users
function check() {
  firebase.database().ref("/").on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = snapshot.val();
      verify = childData;
      dan = verify['danger'];
      version = verify['version'];
      if (dan == "no") {

      } else {
        window.location = "https://www.learncbse.in/ncert-solutions-class-10-science/";
      }
      if (version != version_present) {
        clearCache()
        unloading_yes = "false";
        log_out = "false";
        localStorage.setItem("user_name_main", user_name_temp);

        function clearCache() {
          location.reload(true);
        }
      }
    });
  });
}
setInterval(check, 1000)

//verifying a valid login
function verify() {
  if (log_out == "false") {

  } else {
    if (user_name_temp == "Temp") {} else {
      localStorage.setItem("user_name_main", " ");
    }
    if (user_name != " ") {
      verification = "true"
    } else {
      window.location.replace("index.html");
    }
  }
}
setInterval(verify, 2000);

//scrolling to bottom smoothly
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "0px";
  }
};

function bottom() {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
};

//uploading images
function uploadImage() {
  const ref = firebase.storage().ref();
  const file = document.querySelector("#photo").files[0];
  const name = file.name;
  const metadata = {
    contentType: file.type
  };
  var task = ref.child(name).put(file, metadata);
  alert('Image Uploaded');
  $('#photo').val('');
};
const errorMsgElement = document.querySelector('span#errorMsg');

//idle time detecter for 1hour
let inactivityTime = function () {
  let time;
  window.onload = resetTimer;
  document.onmousemove = resetTimer;
  document.onkeypress = resetTimer;

  function logout1() {
    firebase.database().ref("Rooms/" + room_name).push({
      name: "SERVER",
      message: user_name + " has been idle for 1 hour",
      date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
      time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,

    });
  }

  function resetTimer() {
    clearTimeout(time);
    time = setTimeout(logout1, 3600000)
  }
};
window.onload = function () {
  inactivityTime();
}

//detecting if tab is closed
function unloading() {
  if (unloading_yes == "true") {
    if (user_name == " ") {

    } else {
      firebase.database().ref("Rooms/" + room_name).push({
        name: "SERVER",
        message: user_name + " has closed the tab",
        date: "Date: " + datedate1 + " - " + datemonth1 + " - " + dateyear1,
        time: "Time : " + datehour1 + " : " + datemin1 + " . " + datesec1,

      });
    }
  } else if (unloading_yes == "false") {}
};

function showSnackbar(message_snackbar) {
  var x = document.getElementById("snackbar");
  document.getElementById("snackbar").innerHTML = message_snackbar;
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 2500);
}

function text(url) {
  return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
  let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
  let ip = data.match(ipRegex)[0];
  ip_real = ip;
});