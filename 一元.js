/*
 * 只能造作一个值得操作符叫做一元操作符。
 * 
*/

var age = 29;
++age;
console.log(age);
var age2 = 30;
age2 = age2 + 1;
console.log(age2);

age = 29;
--age;
console.log(age);

age = 29;
age = age - 1;
console.log(age);

var age = 29;
var anotherAge = --age + 2;
console.log(age, anotherAge);

var num1 = 2;
var num2 = 20;
var num3 = num2 + --num1;
console.log(num3);
