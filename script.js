'use strict';


let money=prompt("Ваш бюджет на месяц?", ''), time=prompt('Введите дату в формате YYYY-MM-DD', '');

console.log(money);
console.log(time);


let appData = {
    bud: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
let a1=prompt("Введите обязательную статью расходов в этом месяце", ''), 
    a2=prompt("Во сколько обойдется?", ''),
    a3=prompt("Введите обязательную статью расходов в этом месяце", ''), 
    a4=prompt("Во сколько обойдется?", '');

appData.expenses.a1=a2;
appData.expenses.a3=a4;
alert(appData.bud/30);











/*var a=5;
console.log(a);

var number = 5;
var sym = Symbol();
var string = "Hello!";
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];

console.log(arr[1]);

//alert("Hello world");

//let answer = confirm("Are you here?");
//console.log(answer);

//let answer = +prompt("Есть ли вам 18?", "Да");
//console.log(typeof(answer));
//console.log("arr"+"object");
//console.log(4 +" - object");


let incr=10,
    decr=10;

    

console.log(incr++);
console.log(decr--);

console.log(10%3);
console.log("2" === 2);

let isChecked=false,
    isClose=false;

console.log(isChecked || isClose);
*/
