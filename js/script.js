'use strict';


var mobile_Menu = document.querySelector('.fa-3x');
var ul = document.querySelector('.ul');
var header = document.querySelector('.header');


mobile_Menu.addEventListener('click', function () {
    ul.classList.toggle('display');
    header.classList.toggle('height');
});