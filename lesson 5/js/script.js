let menu = document.querySelectorAll('.menu');
let li = document.createElement('li');
    li.className = 'menu-item';
    li.innerHTML = 'Пятый пункт';

let twoElement = menu[0].children[1],
    threeElement = menu[0].children[2];
menu[0].appendChild(li);
menu[0].insertBefore(threeElement, twoElement);

document.body.style.background = 'url(./img/apple_true.jpg)';

let title = document.getElementById('title');
title.innerText = 'Мы продаём только подлинную технику Apple';

document.querySelector('.adv').remove();
document.getElementById('prompt').innerText = prompt("Каково ваше отношение к технике Apple?","");

//    val.appendChild('<li class="menu-item">Пятый пункт</li>');
