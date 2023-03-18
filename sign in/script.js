function signIn() {
  let userName = document.getElementById("userName").value;
  let pass = document.getElementById("password").value;
  // עושה בדיקה אם השם משתמש והסיסמה נכונים

  if (userName == "abcd") {
    document.getElementById("invUser").style.display = "none";
  } else {
    document.getElementById("invUser").style.display = "block";
  }

  if (pass == "1234") {
    document.getElementById("invPass").style.display = "none";
  } else {
    document.getElementById("invPass").style.display = "block";
  }
  if (pass == "1234" && userName == "abcd") {
    document.getElementById("linkEnter").href = "../lvl/lvl.html";
  }
}
