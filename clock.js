const clockDiv = document.querySelector('.clock'),
  h1 = clockDiv.querySelector('h1');

  function setClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  h1.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 0 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
  setInterval(setClock, 1000);
}

init();