'use strict';

//'object literal'은 syntax 괄호를 이용해서 오브젝트를 만드는 것을 의미함

const sayNode = () => console.log('Node');
const es = 'ES';

const makeObject = {
  // object 키에 함수를 할당하면 메소드처럼 호출할 수 있음
  sayJS() {
    console.log('JS');
  },
  sayNode, // sayNode: sayNode,
  [es + 6]: 'Fantastic',
};

makeObject.sayJS(); // JS
makeObject.sayNode(); // Node
console.log(makeObject.ES6); // 동적으로 ES6 key를 만듦