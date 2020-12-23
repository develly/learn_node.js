class Human {
  constructor(type = 'human') {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    alert('h-a-a-a-m');
  }  
}

// 상속
class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type); // this.type = type;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayNmae() {
    super.breathe();
    alert(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero('human', 'Zero', 'Cho');
console.log(newZero); // Zero { type: 'human', firstName: 'Zero', lastName: 'Cho' }
console.log(Zero.isHuman(newZero)); // true // static은 생성된 객체 아니라 class가 메소드를 지니고 있음
console.log(Human.isHuman(newZero)); // true
