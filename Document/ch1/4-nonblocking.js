function logRunningTask() {
    // 오래 걸리는 작업
    console.log('오래 걸리는 작업 끝');
};

console.log('시작');
setTimeout(logRunningTask, 0); 
console.log('다음 시작');

// 출력
// 시작, 다음 시작, 오래걸리는 작업 끝
// nonblocking (이전 작업이 끝나지 않았지만 다음 작업 시작)
// setTimeout 의 ms를 0으로 시작해 바로 실행되는 것으로 보이지만 약간의 지연이 있음 (HRML5 4ms, node 1ms 지연)