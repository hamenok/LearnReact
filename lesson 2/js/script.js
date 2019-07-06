let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");
    

let appDate = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i=0; i<2; i++){
    let exp1 = prompt("Введите обязательную статью расходов в этом месяце"),
        exp2 = prompt("Во сколько обойдется?");
    if (typeof(exp1) === 'string' && typeof(exp1) != null && 
        typeof(exp2) != null && exp1 != '' && exp2 != '' && exp1.length < 50) {
            appDate.expenses[exp1] = exp2;
        } else {
            i--;
        }
}

appDate.moneyPerDay = appDate.budget / 30;

alert("Ежедневный бюджет: " + appDate.moneyPerDay);

if (appDate.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appDate.moneyPerDay > 100 && appDate.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
} else if (appDate.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}