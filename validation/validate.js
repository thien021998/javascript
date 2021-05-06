let userDisabled;
let passDisabled;
let emailDisabled;
let repeatDisabled;
const text = /[a-z]+/g;
const upCase = /[A-Z]+/g;
const num = /[0-9]+/g;
const special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var checkInputUesr = document.querySelector('#user')
var checkInputEmail = document.querySelector('#email')
var checkInputPass = document.querySelector('#psw')
var checkInputRepeat = document.querySelector('#repeat')
var buttonMouse = document.querySelector('.registerbtn')
var popup = document.querySelector('.overlay')
var closePopup = document.querySelector('.close')

function validateUser(){
  if(checkInputUesr.value.match(special) || checkInputUesr.value == ""){
    document.querySelector('#erro-special').style.display = 'block'
    checkInputUesr.focus();
    checkInputUesr.select();
    userDisabled = false
    return false;
  }
  document.querySelector('#erro-special').style.display = 'none'
  userDisabled = true
  return true
}

function validatePass(){
  let length = checkInputPass.value.length
  if(!checkInputPass.value.match(text) || !checkInputPass.value.match(upCase) || !checkInputPass.value.match(num)){
    document.querySelector('#erro-charter-format').style.display = 'block'
    document.querySelector('#erro-chacter-pass').style.display = 'none'
    passDisabled = false
    checkInputPass.focus();
    checkInputPass.select();
    return false;
  } else {
    document.querySelector('#erro-charter-format').style.display = 'none'
    if(length < 8 || length >32){
      document.querySelector('#erro-chacter-pass').style.display = 'block'
      passDisabled = false
      checkInputPass.focus();
      checkInputPass.select();
      return false;
    } else {
      document.querySelector('#erro-chacter-pass').style.display = 'none'
      passDisabled = true
      return true
    }
  }
}

function validateEmail() {
  if (!re.test(checkInputEmail.value)) {
      document.querySelector('#erro-email').style.display = "block"
      emailDisabled = false
      return false;
  }
  emailDisabled = true
  document.querySelector('#erro-email').style.display = "none"
  return true
}

function check() {
  if(checkInputPass.value == checkInputRepeat.value){
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
    [buttonMouse][0].style.cursor = "auto"
  } else if(userDisabled == false || passDisabled == false || emailDisabled == false || repeatDisabled == false){
    buttonMouse.disabled = true;
    [buttonMouse][0].style.cursor = "no-drop";
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
