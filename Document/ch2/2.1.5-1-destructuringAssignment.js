'use strict';

// 구조 분해 할당 basic
let a, b;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

let rest;
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: Array [30,40,50]

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;
console.log(node); // nodejs
console.log(obj); // {}
console.log(bool); // true

// 객체의 구조분해 할당
const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--; // this는 { status: { name: 'node', count: 5 }, getCandy: [Function: getCandy] }
    return this.status.count; // 리턴 안해도 동일한 값 나옴
  },
};
// old
// var getCandy = candyMachine.getCandy; // ()없음. 함수 할당
// var count = candyMachine.status.count; // 변수 할당
// new
// 과거에 하나씩 할당하던 것을 아래와 같이 한번에 할당 가능
const { getCandy, status: { count } } = candyMachine;
console.log(getCandy);
console.log(count);
// 기타
candyMachine.getCandy(); // ()있으므로 호출
console.log(candyMachine.status.count); // 4
candyMachine.getCandy();
console.log(candyMachine.status.count); // 3