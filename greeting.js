const form = document.querySelector('.form'),
  input = form.querySelector('.inputText');

const userNameIndi = document.querySelector('.userNameIndicator'),
  h3UserName = userNameIndi.querySelector('h3');


const NAME = "userName";
let userName = localStorage.getItem(NAME);

function loadName() {
  if(userName === null) {
    displayNameAdd();
  } else {
    displayName();
  }
}
form.addEventListener('submit', submit);

function displayNameAdd() {
  input.classList.add('inputText');
  input.classList.remove('inputTextDeleted');
}

function undisplayNameAdd() {
  input.classList.remove('inputText');
  input.classList.add('inputTextDeleted');
}

function displayName() {
  h3UserName.style.display = "block";
  h3UserName.innerHTML = `Hello, ${userName}!`;
  undisplayNameAdd();
}

function submit(event) {
  event.preventDefault();
  userName = input.value;
  input.value = "";
  localStorage.setItem(NAME, userName);
  loadName();
}


function init() {
  loadName();
}

init();