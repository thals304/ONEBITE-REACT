// 1. 묵시적 형 변환
// JS 엔진이 알아서 형 변환

let num = 10;
let str = "20";

const result = num + str;
// console.log(result); // 1020

// 2. 명시적 형 변환
// 프로그래머가 내장함수를 이용해 직접 형 변환

let str1 = "10";
let strToNum1 = Number(str1);

// console.log(10 + strToNum1); // 20

let str2 = "10개";
//let strToNum2 = Number(str2);
// console.log(strToNum2); // NaN

let strToNum2 = parseInt(str2); 
// console.log(strToNum2); // 10

// 숫자 -> 문자
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다"); // 20입니다.