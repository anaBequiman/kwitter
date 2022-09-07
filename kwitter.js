function login(){
  var usernome = document.getElementById("userName").value;
  localStorage.setItem("userName", usernome);

  window.location = "kwitterRoom.html";
}