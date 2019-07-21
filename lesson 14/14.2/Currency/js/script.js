
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

    let data;
inputRub.addEventListener('input', function() {

    function getCur(){
        
        return new Promise(function(resolve, reject){
            let request = new XMLHttpRequest();
            request.open('GET', 'js/current.json');
            request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
            request.send();
            request.addEventListener('readystatechange', function() {
                if (request.readyState < 4){
                    resolve();
                } else if (request.status == 200 && request.readyState === 4) {
                    data = JSON.parse(request.responseText);
                    resolve();
                    
                } else {
                   // console.log('neok');
                    reject();
                }
            });
            
            
        });
    }
   
    getCur()
        .then()
        .then(() => {  
            inputUsd.value = inputRub.value / data.usd;
        })
        .catch(() => {
            inputUsd.value = "Что-то пошло не так!";
        });
});