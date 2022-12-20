function loginform() {
  var username = document.getElementById("user1").value;
  var password = document.getElementById("pass1").value;
  if (username == "shibi" && password == "shibi1999") {
    window.open("http://127.0.0.1:5500/main%20page/products.html");
  } else {
    alert("Access Denied");
  }
}
