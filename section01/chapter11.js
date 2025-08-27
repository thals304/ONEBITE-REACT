// 함수 선언
// function greeting () {
//     console.log("Hello!")
// }

// console.log("호출전");
// greeting() // 함수 호출
// console.log("호출후");

let area1 = getArea(10, 20); // 인수
console.log(area1);

let area2 = getArea(20, 30);
console.log(area2);

// 호이스팅 기능
// 끌어올리다 라는 뜻

function getArea (width, height) { // 매개변수
    function another() { // 중첩함수
        console.log("another");
    }

    another()
;    
    let area = width * height;
    
    return area; 
    console.log("hello"); // return 하면 다음 코드는 출력 안됨
}
