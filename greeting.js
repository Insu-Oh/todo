const form = document.querySelector('.form'),
  input = form.querySelector('.inputText');

const NAME = "userName";

function loadName() {
  const userName =  localStorage.getItem(NAME);
  if(userName === null) {
    displayNameAdd();
  } else {
    displayName();
  }
}

function displayNameAdd() {

}

function displayName() {

}

function init() {
  loadName();
}

init();