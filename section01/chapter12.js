// 1. 함수 표현식
// 호이스팅 대상이 되지 않음
function funcA () {
    console.log("funcA");
}

let varA = funcA;
varA();

let varB = function funcB(){ // 익명 함수
    console.log("funcB");
}

varB();
// funcB(); 오류

// 2. 화살표 함수
// 함수를 더 빠르고 간결하게 만들어주는 함수

let varC = (value) => value + 1;

console.log(varC(10)); // 11