//input.value
//blur
//DomContentLoaded

let storage = window.localStorage

let uname = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

uname.addEventListener('blur', function() {
    storage.setItem('name', uname.value)
})

email.addEventListener('blur', function() {
    storage.setItem('email', email.value)
})

password.addEventListener('blur', function() {
    storage.setItem('password', password.value)
})

document.addEventListener('DOMContentLoaded', function() {
    let name = document.querySelector('#username');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    name.value = storage.getItem('name')
    email.value = storage.getItem('email')
    password.value = storage.getItem('password')
})

function bobra() {
    localStorage.clear()
    uname.value = null
    email.value = null
    password.value = null
}


