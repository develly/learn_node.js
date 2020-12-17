function logRunningTask() {
    // 오래 걸리는 작업
    console.log('오래 걸리는 작업 끝');
};

console.log('시작');
logRunningTask();
console.log('다음 시작');

// 출력
// 시작, 오래 걸리는 작업 끝, 다음 시작
// 다음 작업이 시작되려면 이전 작업이 끝나야 함
// blocking

