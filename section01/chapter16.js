// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
}

animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

console.log(animal);

// 2. 메서드
// 값이 함수인 프로퍼티를 말함

const person = {
    name : "김익명",
    // 메서드 선언 (객체의 동작)
    sayHi(){
        console.log("hi");
    }
}

person.sayHi();
person["sayHi"]();