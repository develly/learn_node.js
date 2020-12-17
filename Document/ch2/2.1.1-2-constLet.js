const a = 0;
a = 1; // Uncaught TypeError: Assignment to constant variable

// const 는 선언과 동시에 값을 할당한 뒤 포인터를 수정할 수 없음 (따라서 새 값 설정 불가)

let b = 0;
b = 1; // 1

// let은 포인터 수정 가능 (새 값 설정 가능)

