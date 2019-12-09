// Tugas Akhir JavaScript

var label = document.createElement("label")

function buat_login() {
  var a = document.getElementById("X")
  a.parentElement.removeChild(a)

  var text = document.createElement("p")
  text.className = "tulisan_login"
  text.innerHTML = "silahkan mendaftar"
  var div = document.getElementsByTagName("div")[0]
  div.appendChild(text);

  var form_layout = document.createElement("form")
  form_layout.className = 'form_layout'
  div.appendChild(form_layout)

  var label_user = document.createElement("label")
  label.className = "label"
  label.innerHTML = "Nama User"
  form_layout.appendChild(label)

  var input_user = document.createElement("input")
  input_user.className = "form_login"
  input_user.type = "text"
  input_user.placeholder = "Nama User .."
  form_layout.appendChild(input_user)

  var label_phone = document.createElement("label")
  label_phone.className = "label"
  label_phone.innerHTML = "Nomor Handphone"
  form_layout.appendChild(label_phone)

  var input_phone = document.createElement("input")
  input_phone.className = "form_login"
  input_phone.type = "number"
  input_phone.placeholder = "Nomor Handphone."
  form_layout.appendChild(input_phone)

  var label_username = document.createElement("label")
  label_username.className = "label"
  label_username.innerHTML = "Username"
  form_layout.appendChild(label_username)

  var input_username = document.createElement("input")
  input_username.className = "form_login"
  input_username.type = "text"
  input_username.placeholder = "Username atau Email .."
  form_layout.appendChild(input_username)

  var label_password = document.createElement("label")
  label_password.className = "label"
  label_password.innerHTML = "Password"
  form_layout.appendChild(label_password)

  var input_password = document.createElement("input")
  input_password.className = "form_login"
  input_password.type = "password"
  input_password.placeholder = "Password .."
  form_layout.appendChild(input_password)

  var input_submit = document.createElement("input")
  input_submit.className = "tombol_login"
  input_submit.type = "submit"
  input_submit.onclick = "thanks()"
  input_submit.value = "DAFTAR SEKARANG"
  form_layout.appendChild(input_submit)
}