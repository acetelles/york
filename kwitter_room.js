const firebaseConfig = {
    apiKey: "AIzaSyA-j1pcWVe4JXzYNc80HVb4VHpR1ZdWolU",
    authDomain: "prueba-clase-9138b.firebaseapp.com",
    projectId: "prueba-clase-9138b",
    storageBucket: "prueba-clase-9138b.appspot.com",
    messagingSenderId: "1015496112861",
    appId: "1:1015496112861:web:22dea809fe5cb9f567f934"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);



  user_name = localStorage.getItem("user_item");
  room_name = localStorage.getItem("room_name");  

  document.getElementById("userName").innerHTML = "¡Bienvenido " + user_name + "!"


  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia código, help xdd
    
    row = "<div class='room_name' id="> +Room_names+ " onclick ='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";

    //Termina código
    });});}
    getData();

    function redirectToRoomName {
        document.getElementById("roomName").value = room_name;
        window.location = "index.html"
    }

