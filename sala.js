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
  var nomeUsuario = localStorage.getItem("userName");
  var nomeDaSala = localStorage.getItem("nomeSala");
  function enviarMsg(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(nomeDaSala).push({
        name:nomeUsuario,
        mesage:msg,
        like:0
      });
      document.getElementById("msg").value = " ";
  }
  

//LINKS FIREBASE
function getData() { firebase.database().ref("/"+nomeDaSala).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código
    console.log(firebaseMessageId);
    console.log(messageData);
    nome = messageData['name'];
    mensagem = messageData['mesage'];
    curtidas = messageData['like'];
    
    namePreparar = "<h4> "+ nome +"<img class='user_tick' src='tick.png'>"; 
    messagePreparar = "<h4 class='message_h4'>" + mensagem + "</h4>";
    botaoLike = "<button class='btn btn-warning' id="+firebaseMessageId+" value="+curtidas+" onclick='updateLike(this.id)'>";
    spanBotao = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+curtidas+"</span></button><hr>"

    todosJuntos = namePreparar + messagePreparar + botaoLike + spanBotao;
    document.getElementById("output").innerHTML += todosJuntos;
//Fim do código
 } });  }); }
getData();
function updateLike(btnLike){
    likes = document.getElementById(btnLike).value;
    adicionarLike = Number(likes) + 1;
    firebase.database().ref(nomeDaSala).child(btnLike).update({
        like:adicionarLike
    })
}