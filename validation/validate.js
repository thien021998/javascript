let userDisabled;
let passDisabled;
let emailDisabled;
let repeatDisabled;
var text = /[a-z]/g;
var upCase = /[A-Z]/g;
var num = /[0-9]/g;
var special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var form = document.frm;
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
  if(user.value.match(special) || user.value == ""){
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
  if(!pass.value.match(text) || !pass.value.match(upCase) || !pass.value.match(num)){
    document.querySelector('#erro-charter-format').style.display = 'block'
    passDisabled = false
    pass.focus();
    pass.select();
    return false;
  } else {
    document.querySelector('#erro-charter-format').style.display = 'none'
    let length = pass.value.match(text).length + pass.value.match(upCase).length + pass.value.match(num).length
    if(length < 8 || length >32){
      document.querySelector('#erro-chacter-pass').style.display = 'block'
      passDisabled = false
      pass.focus();
      pass.select();
      return false;
    } else {
      document.querySelector('#erro-chacter-pass').style.display = 'none'
      passDisabled = true
      return true
    }
  }
}

function validateEmail() {
  let email = form.email.value
  if (!re.test(email)) {
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
    buttonMouse.disabled = false;
    buttonMouse.classList.remove('mouse')
  } else if(userDisabled == false || passDisabled == false || emailDisabled == false || repeatDisabled == false){
    buttonMouse.disabled = true;
    buttonMouse.classList.add('mouse')
  }
}

buttonMouse.onclick = function(){
  popup.classList.toggle('dialog')
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
  popup.classList.toggle('dialog')
}
