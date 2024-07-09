let btn = document.getElementById("login-btn")
btn.addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    window.location.href = "banking2.html";
  } else {
    alert("Wrong Username and Password");
  }
});