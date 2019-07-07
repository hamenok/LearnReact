let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money =="" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i=0; i<2; i++){
            let exp1 = prompt("Введите обязательную статью расходов в этом месяце"),
                exp2 = prompt("Во сколько обойдется?");
            if (typeof(exp1) === 'string' && typeof(exp1) != null && 
                typeof(exp2) != null && exp1 != '' && exp2 != '' && exp1.length < 50) {
                    appData.expenses[exp1] = exp2;
                } else {
                    i--;
                }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    chooseOptExpenses: function(){
        for (let i=0; i<3; i++){
            let exp1 = prompt("Введите необязательную статью расходов"),
                exp2 = prompt("Во сколько обойдется?");
            if (typeof(exp1) === 'string' && typeof(exp1) != null && 
                typeof(exp2) != null && exp1 != '' && exp2 != '' && exp1.length < 50) {
                    appData.optionalExpenses[exp1] = exp2;
                } else {
                    i--;
                }
        }
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.mounthIncome = save/100/12*percent;
            alert("Доход в месяц с вашегодепозита: " + appData.mounthIncome);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесёт дополнительный доход? (перечислите через запятую)","");
        while (typeof(items) != "string" || typeof(items) == null || 
                items == "" || items.length < 0){
                    items = prompt("Что принесёт дополнительный доход? (перечислите через запятую)","");
        }
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();
            appData.income.forEach((e ,i) => {
                console.log("Способы доп. заработка: " + (+i+1) + " - " + e);
            });
        
    }
};

for (value in appData) {
    console.log("Наша программа включает в себя данные: " + value);
}
