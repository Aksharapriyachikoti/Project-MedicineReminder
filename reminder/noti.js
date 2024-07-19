// JS Nuggets: Notifications API

//Notification.requestPermission();

//new Notification("Subscribe to JS Nuggets!");

function notifyMe() {
    if (!("Notification" in window)) {
      alert("This browser does not support system notifications");
    }
    else if (Notification.permission === "granted") {
      notify();
    }
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          notify();
        }
      });
    }
    
    function notify() {
      var notification = new Notification('MEDICINE REMINDER', {
        icon: 'http://carnes.cc/jsnuggets_avatar.jpg',
        body: "welcome to the medicine reminder!",
      });
  
      notification.onclick = function () {
        window.open("http://127.0.0.1:5501/.vscode/reminder/index.html");      
      };
      setTimeout(notification.close.bind(notification), 7000); 
    }
  
  }
  notifyMe();