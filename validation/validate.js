var userDisabled;
var passDisabled;
var emailDisabled;
var repeatDisabled;
var text = /[a-z]/;
var Upcase = /[A-Z]/;
var num = /[0-9]/;
var test = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
var form = document.frm;
var checkDisabled = document.querySelector('button')
var checkInputUesr = document.querySelector('#user')
var checkInputEmail = document.querySelector('#email')
var checkInputPass = document.querySelector('#psw')
var checkInputRepeat = document.querySelector('#repeat')
var buttonMouse = document.querySelector('.registerbtn')
var popup = document.querySelector('.overlay')
var closePopup = document.querySelector('.close')
buttonMouse.classList.add('mouse')

function validateUser(){
  let user = form.user
  if(user.value.match(test) || user.value == ""){
    document.querySelector('#erro-special').style.display = 'block'
    user.focus();
    user.select();
    userDisabled = false
    return false;
  }
  document.querySelector('#erro-special').style.display = 'none'
  userDisabled = true
  return true
}

function validatePass(){
  let pass = form.psw
  let length = pass.value.length
  if(!pass.value.match(text) || !pass.value.match(Upcase) || !pass.value.match(num) || length < 8 || length > 32){
    if (!pass.value.match(text) || !pass.value.match(Upcase) || !pass.value.match(num)){
      document.querySelector('#erro-charter-format').style.display = 'block'
    }
    if (length < 8 || length > 33){
      document.querySelector('#erro-chacter-pass').style.display = 'block'
    }
    if(pass.value.match(text) && pass.value.match(Upcase) && pass.value.match(num)){
      document.querySelector('#erro-charter-format').style.display = 'none'
    }
    if(length >= 8 && length < 33){
      document.querySelector('#erro-chacter-pass').style.display = 'none'
    }
    passDisabled = false
    pass.focus();
    pass.select();
    return false;
  }
  document.querySelector('#erro-chacter-pass').style.display = 'none'
  document.querySelector('#erro-charter-format').style.display = 'none'
  passDisabled = true
  return true
}

function validateEmail() {
  let email = form.email
  var atposition = email.value.indexOf("@gmail");
  var dotposition = email.value.lastIndexOf(".");
  if (atposition < 1 || dotposition < (atposition + 2)
          || (dotposition + 2) >= email.value.length) {
      document.querySelector('#erro-email').style.display = "block"
      emailDisabled = false
      return false;
  }
  emailDisabled = true
  document.querySelector('#erro-email').style.display = "none"
  return true
}

function check() {
  let first = form.psw;
  let second = form.repeat
  if(first.value == second.value){
    repeatDisabled = true
    document.querySelector('#erro-repeat').style.display = "none"
    return true
  } else {
    document.querySelector('#erro-repeat').style.display = "block"
    repeatDisabled = false
    return false
  }
}

function closeDisabled(){
  if (userDisabled == true && passDisabled == true && emailDisabled == true && repeatDisabled == true){
    checkDisabled.disabled = false;
    buttonMouse.classList.remove('mouse')
  } else if(userDisabled == false || passDisabled == false || emailDisabled == false || repeatDisabled == false){
    checkDisabled.disabled = true;
    buttonMouse.classList.add('mouse')
  }
}

checkDisabled.onclick = function(){
  popup.classList.toggle('test')
}
checkInputUesr.onchange = function(){
  validateUser()
  closeDisabled()
}
checkInputEmail.onkeyup = function(){
  validateEmail()
  closeDisabled()
}
checkInputPass.onchange = function(){
  validatePass()
  check()
  closeDisabled()
}
checkInputRepeat.onkeyup = function(){
  check()
  closeDisabled()
}
closePopup.onclick = function(){
  popup.classList.toggle('test')
}
