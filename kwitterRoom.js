const firebaseConfig = {
  apiKey: "AIzaSyA9wSnQL5tDnDqqnqni_iBV8Zm8v8YS46M",
  authDomain: "kwitter-3ed30.firebaseapp.com",
  databaseURL: "https://kwitter-3ed30-default-rtdb.firebaseio.com",
  projectId: "kwitter-3ed30",
  storageBucket: "kwitter-3ed30.appspot.com",
  messagingSenderId: "66469456980",
  appId: "1:66469456980:web:f5c648fc84e54e1bfa91c1"
};
// Initialize Firebase
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