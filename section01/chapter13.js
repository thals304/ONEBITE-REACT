// 콜백함수
function main (value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");
}

function sub () {
    console.log("i am sub");
}

main(sub); // 콜백함수 -> main함수가 원할때 수행할 수 있음

// 콜백함수 활용
function repeat (count, callback) {
    for (let idx = 1; idx <= count; idx++){
        callback(idx);
    }
}

// 중복 코드
// function repeatDouble(count) {
//     for (let idx = 1; idx <= count; idx++){
//         console.log(idx * 2);
//     }
// }

repeat(5, function(idx) {
    console.log(idx);
});

repeat(5, (idx) => { // 더 간결하게 줄이는 방법
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});