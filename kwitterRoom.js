const firebaseConfig = {
  apiKey: "AIzaSyDogkkvB5AhJLCxS-UEQyskUss1MOtdvzc",
  authDomain: "kwitter-d8b64.firebaseapp.com",
  databaseURL: "https://kwitter-d8b64-default-rtdb.firebaseio.com",
  projectId: "kwitter-d8b64",
  storageBucket: "kwitter-d8b64.appspot.com",
  messagingSenderId: "384317178731",
  appId: "1:384317178731:web:f8efa4d09d9c35b4f8c22e"
};

firebase.initializeApp(firebaseConfig);
var nomeDoUsuario = localStorage.getItem("userName");
document.getElementById("nameUsuario").innerHTML = "Bem vindo(a) " + nomeDoUsuario + "!";

function addRoom(){
  var novaSala = document.getElementById("roomName").value;
  firebase.database().ref("/").child(novaSala).update({
      sala : "salaCriado"
  });
  localStorage.setItem("nomeSala", novaSala);
}
function getData(){
  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
    nomeSalas = childKey;
    console.log(nomeSalas);
    divJs = "<div class='roomName'id="+nomeSalas+"  onclick='entrarSala(this.id)'>"+nomeSalas+"</div> <hr>"
    document.getElementById("output").innerHTML += divJs;
    }); 
  });
}
getData();
function sair(){
  localStorage.removeItem("userName");
  localStorage.removeItem("nomeSala");
  window.location = "index.html"
}
function entrarSala(name){
  console.log(name);
  localStorage.setItem("nomeSala",name)
  window.location = "sala.html";
} 