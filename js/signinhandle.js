function signin() {
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  if (u == "admin" && p == "admin") {
    document.getElementsByTagName("form")[0].innerHTML = `
    <p style="text-align:center" >Logged In Successfully as Admin ✅ <br><a href="admin.html">Click to continue</a></p>
    
    `;
  }
}
