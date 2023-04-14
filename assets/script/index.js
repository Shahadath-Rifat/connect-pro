'use strict';

localStorage.setItem('username', 'Rifat77');
localStorage.setItem('password', 'plok09!');

const username = document.querySelector('.username');
const password = document.querySelector('.password');
const forgotPass = document.querySelector('.wrong_pass');
const submitBtn = document.querySelector('.submit__btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (
    username.value === localStorage.getItem('username') &&
    password.value === localStorage.getItem('password')
  ) {
    location.href = 'home.html';
  } else {
    forgotPass.innerText = 'Invalid username/password';
    setTimeout(() => {
        forgotPass.innerText = '';
    }, 8000);
  };
});
