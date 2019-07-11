let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensensValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensensValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingValue = document.getElementsByClassName('yearsavings-value')[0],

    expensensItem = document.getElementsByClassName('expenses-item'),
    expensensBtn = document.getElementsByTagName('button')[0],
    optionalExpensensBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensensItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),

    btnAll = document.getElementsByTagName('button');

    for (let i = 0; i<btnAll.length-1; i++){
        btnAll[i].disabled = true;
    }


let money,
    time;

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");

    while(isNaN(money) || money =="" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    
    for (let i = 0; i<btnAll.length-1; i++){
        if (btnAll[i].disabled  ){ 
            btnAll[i].disabled = false;
        }
    }
    
});

expensensBtn.addEventListener('click', function(){
    let sum = 0;

    for (let i = 0; i < expensensItem.length; i++){
        let exp1 = expensensItem[i].value,
            exp2 = expensensItem[++i].value;
        if (typeof(exp1) === 'string' && typeof(exp1) != null && 
            typeof(exp2) != null && exp1 != '' && exp2 != '' && exp1.length < 50) {
                appData.expenses[exp1] = exp2;
                sum += +exp2;
            } else {
                i--;
            }
    }
    expensensValue.textContent = sum; 
});

optionalExpensensBtn.addEventListener('click', function(){
    for (let i=0; i<optionalExpensensItem.length; i++){
        let opt = optionalExpensensItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensensValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function(){

    if (appData.budget != undefined) {
        appData.moneyPerDay = ((appData.budget - +expensensValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

incomeItem.addEventListener('input', function(){
    let items = incomeItem.value;
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
}); 

checkSavings.addEventListener('click', function(){
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
    
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};