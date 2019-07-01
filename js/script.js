let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    exp1 = prompt("Введите обязательную статью расходов в этом месяце"),
    exp2 = prompt("Во сколько обойдется?");

const appDate = {
    budget: money,
    timeData: time,
    expenses: {
        exp1: exp2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert(appDate.budget / 30);
