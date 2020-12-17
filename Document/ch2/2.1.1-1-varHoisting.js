if (true) {
    var x = 3;
}
console.log(x); // 3

// var hoisting
// block에 영향을 받지 않고 가장 위에 선언 됨


if (true) {
    const y = 3;
}
console.log(y); // Uncaught ReferenceError: y is not defined

// 원칙 대로 {} 내부에 선언된 변수는 밖에서 볼 수 없음