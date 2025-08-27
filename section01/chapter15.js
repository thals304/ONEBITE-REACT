// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) -> 키(key) : 값(value)
let person = {
    name : "김익명",
    age : 24,
    hobby : "첼로",
    job : "FE developer",
    extra : {},
    10 : 20,
    "like cat" : true,
}


// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기번, 괄호 표기법)
let name = person.name;
console.log(name);

let age = person["age"]; // 반드시 "" 안에 써줘야함
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favorite_food"] = "떡볶이";

console.log(person);

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favorite_food"] = "초콜릿"

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favorite_food"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
console.log(result1); // true

let result2 = "cat" in person;
console.log(result2); // false
