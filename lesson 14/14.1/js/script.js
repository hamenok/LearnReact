window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2019-10-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000) % 60),
            minutes = Math.floor((t/1000/60) % 60),
            hours = Math.floor((t/(1000*60*60)));

            return {
                'total' : t,
                'hours' : hours,
                'minutes' : minutes,
                'seconds' : seconds
            };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = document.querySelector('.hours'),
            minutes = document.querySelector('.minutes'),
            seconds = document.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);
                if (t.hours < 10) {
                    hours.textContent ='0' + t.hours;
                } else {
                    hours.textContent = t.hours;
                }
                if (t.minutes < 10) {
                    minutes.textContent ='0' + t.minutes;
                } else {
                    minutes.textContent = t.minutes;
                }
                if (t.seconds < 10) {
                    seconds.textContent ='0' + t.seconds;
                } else {
                    seconds.textContent = t.seconds;
                }

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }

    }

    setClock('timer', deadline);


    //Modal
    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),

        infoM = document.querySelector('.info'),

        description = document.querySelectorAll('.description-btn');

       
    
    more.addEventListener('click', function(){
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function(){
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    infoM.addEventListener('click', function(event){
        let target = event.target;

        if (target && target.classList.contains('description-btn')){
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
  

    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'    
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        formContact = document.querySelector('#form');

        statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(event){
            event.preventDefault();
            elem.appendChild(statusMessage);

            let formData = new FormData(elem);
            
            function postData(data) {
                
                return new Promise(function(resolve, reject){
                    let XHR = new XMLHttpRequest();
                    XHR.open('POST', 'server.php');
                    XHR.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
                    
                    XHR.addEventListener('readystatechange', function(){
                        if (XHR.readyState < 4) {
                            resolve();
                        } else if (XHR.readyState == 4 && XHR.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    XHR.send(data);
                });
            } //end postData

            let obj = {};
            formData.forEach(function(value, key){
                obj[key] = value;
            });

            let json = JSON.stringify(obj);
            
            function clearInput() {
                for (let i=0; i < input.length; i++) {
                    input[i].value = '';
                }
            }

            postData(json)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }
    
    sendForm(form);
    sendForm(formContact);
        

});