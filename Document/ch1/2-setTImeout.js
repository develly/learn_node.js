function run() {
    console.log('3초 후 시작');
};

console.log('시작');
setTimeout(run, 3000);
console.log('끝');

// 출력
// 시작, 끝, 3초 후 시작

// setTimeout 을 만나면 '호출 스택'에 anonymous, setTimeout이 순서대로 올라감
// 쌓인 순서와 반대 순서로 실행되므로 setTimeout이 먼저 실행됨
// setTimeout이 실행되면 'background'로 run(콜백 함수)과 3초가 넘어감 (setTimeout 호출 스택에서 제거, anonymous 제거)
// background에서 3초 간 대기 한 뒤 '테스크 큐' 으로 run이 넘어감
// '이벤트 루프'는 호출 스택에 아무 것도 없으면 '테스크 큐'에 있는 콜백 함수를 하나씩 넘김
// 따라서 run 이 호출 스택에 넘어가고 실행됨

// 이러한 과정으로 인해 setTimeout이 정확하게 3초 후에 실행되진 않을 수 있음
// 호출 스택이 비어있지 않고 꽉 차있다면 run 이 넘어가지 않기 때문
