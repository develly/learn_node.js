'use strict';

// arrow function example 1
function add1(x, y) {
    return x + y;
}
const add2 = (x, y) => {
    return x + y;
};
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

// arrow function example 2
function not1(x) {
    return !x;
}
const not2 = x => !x;

// this 바인드 방식 변화
const relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function() {
        var that = this; // this는 relationship1을 가르킴
        this.friends.forEach(friend => console.log(that.name, friend));
    }
}
relationship1.logFriends();

const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends() {
        this.friends.forEach(friend => console.log(this.name, friend));
    },
};
relationship2.logFriends();