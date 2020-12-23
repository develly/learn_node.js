'use strict';

const condition = true; // true면 resolve, false면 reject
const promise = new Promise((resolve, reject) => { // 바로 실행됨
  if (condition) {
    resolve('성공');
  } else {
    reject(new Error('실패'));
  }
});

promise
  .then((message) => {
    console.log(message); // 성공(resolve)한 경우 실행
  })
  .catch((error) => {
    console.error(error); // 실패(reject)한 경우 실행
  })
  .finally(() => { // 끝나고 무조건 실행
    console.log('무조건');
  });

promise
  .then((message) => {
    return new Promise((resolve, reject) => {
      resolve(message);
    });
  })
  .then((message2) => {
    console.log(message2);
    return new Promise((resolve, reject) => {
      resolve(message2);
    });
  })
  .then((message3) => {
    console.log(message3);
  })

  .catch((error) => {
    console.error(error);
  });

const promise1 = Promise.resolve('성공1'); // 바로 resolve하는 프로미스 만듦
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2]) // 모두 resolve될 때까지 기다린 후 then으로 넘어감
  .then((result) => {
    console.log(result); // ['성공1', '성공2'];
  })
  .catch((error) => {
    console.error(error);
  });