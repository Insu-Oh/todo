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
form.addEventListener('submit', function(e){
  e.preventDefault();
});

function displayNameAdd() {
  input.classList.remove('inputText');
  input.classList.add('inputTextDeleted');
}

function undisplayNameAdd() {
  input.classList.add('inputText');
  input.classList.remove('inputTextDeleted');
}

function submit(event) {
  event.preventDefault();
}


function init() {
  loadName();
}

init();