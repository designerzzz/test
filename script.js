'use strict';

let money,
  time;

function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
};

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let expensesItem = prompt('Введите обязательную статью расходов в этом месяце', ''),
      expensescCost = +prompt('Во сколько обойдется?', '');

    if ((typeof (expensesItem)) === 'string' && 
    typeof (expensesItem) != '' && 
    typeof (expensesItem) != null && 
    expensesItem.length < 50 && 
    typeof (expensescCost) != null &&
      typeof (expensescCost) != '') {
      console.log(`done`);
      appData.expenses[expensesItem] = expensescCost;
    } else {
      i--;
    }
  }
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert(`Ежедневный бюджет пользователя = ${appData.moneyPerDay}`);
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log(`Минимальный уровень достатка`);
  } else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
    console.log(`Средний уровень достатка`);
  } else if (appData.moneyPerDay > 2000) {
    console.log(`Высокий уровень достатка`);
  } else {
    console.log(`Произошла ошибка`);
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings == true) {
    let save = +prompt("Сумма накоплений?", ""),
      percent = prompt("Под какой процент", "");
    appData.momthIncome = save / 100 / 12 * percent;
    alert("Доход в месяц с вашего депозита: " + appData.momthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 1; i <= 3; i++) {
    let optionalExpensesItem = prompt('Введите не обязательную статью расходов в этом месяце', '');

    if ((typeof (optionalExpensesItem)) === 'string' &&
      typeof (optionalExpensesItem) != '' &&
      typeof (optionalExpensesItem) != null &&
      optionalExpensesItem.length < 50) {
      console.log(`done optionalExpenses`);
      appData.optionalExpenses[i] = optionalExpensesItem;
    } else {
      i--;
    }
  }
}
chooseOptExpenses();