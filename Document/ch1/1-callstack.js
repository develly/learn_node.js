function first() {
    second();
    console.log('첫 번째');
};

function second() {
    third();
    console.log('두 번째');
};

function third() {
    console.log('세 번째');
};

first();

// 출력
// 세 번째, 두 번째, 첫 번째
// 함수의 호출부를 발견하면 node는 호출 스택에 anonymous function을 올림 (이것은 전역 컨텍스트로 함수 호출시 생성되는 환경을 의미함)
// anonymous, first, second, third 순서로 호출 스택에 쌓이고
// 실행은 반대 순서로 실행됨. third, second, first, anonymous
// 실행이 모두 완료되면 호출 스택은 빈 공간이 됨
