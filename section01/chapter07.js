// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10;  
//console.log(num6); // 21

// 3. 복합 대입 연산자 (산술 + 대입)
let num7 = 10;
num7 += 20;
//console.log(num7); // 30
num7 -= 20;
//console.log(num7); // 10

// 4. 증감 연산자
let num8 = 10;
num8 ++;
// console.log(num8); // 11

// console.log(num8++); // 12가 아닌 11
// console.log(++num8); // 13 (바로 적용)

// 5. 논리 연산자
let or = true || false;

let and = true && false;

let not = !true;

// console.log(or); // true
// console.log(and); // false
// console.log(not); // false

// 6. 비교연산자 (===)
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
//console.log(comp1, comp2); // false  true

let comp3 = 2 > 1;
let comp4 = 2 < 1;
//console.log(comp3, comp4); // true false

let comp5 = 2 >= 2;
let comp6 = 2 <= 2;
//console.log(comp5, comp6); // true true

