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

getData();

function getData() {
    firebase.database().ref("Logins/").orderByChild("timestamp").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (snapshot) {
            childKey = snapshot.key;
            childData = snapshot.val();
            if (childKey != "purpose") {
                row = document.createElement("h6");
                firebase_message_id = childKey;
                message_data = childData;
                name = message_data['name'];
                time = message_data['time'];
                time = time.replaceAll("Yess! ", " ");
                id_login = "<h4 class='prevent-select sub-text'> Name : " + name + "</h4>";
                time_login = "<h4 class='prevent-select sub-text'> " + time + "</h4><hr>";
                final = id_login + time_login;
                document.getElementById("output").innerHTML += final;
            }
        });
    });
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}

body1.addEventListener("keypress", function (event) {
    if (event.key === ";") {
        window.location.replace("https://www.learncbse.in/ncert-solutions-class-10-science/");
    }
});

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

window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
}

function bottom() {
    window.scrollTo({
        left: 0,
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
}

function loginR() {
    window.location.replace("hindi.html");
}

function text(url) {
    return fetch(url).then(res => res.text());
}

text('https://www.cloudflare.com/cdn-cgi/trace').then(data => {
    let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/
    let ip = data.match(ipRegex)[0];
    ip_real = ip;
});