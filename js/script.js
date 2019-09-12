'use strict';

var menu = document.querySelector('.mobile-menu');

var ul = document.querySelector('.ul');

var header = document.querySelector('.header');

menu.addEventListener('click', function () {
    ul.classList.toggle('display');
    header.classList.toggle('height');
});

