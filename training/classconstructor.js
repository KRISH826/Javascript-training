/** @format */

// class User {
//   constructor(userName, email, password) {
//     this.userName = userName;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}%^&**`;
//   }
// }

// const UserDetails = new User("chai", "chai@gmail.com", "123");
// console.log(UserDetails.encryptPassword());

// inheritance

class User {
  constructor(userName) {
    this.userName = userName;
  }

  logme() {
    console.log(`user name is ${this.userName}`);
  }
}

class Teacher extends User {
  constructor(userName, email, password) {
    super(userName);
    this.email = email;
    this.password = password;
  }

  addcourse() {
    console.log(`a new course added by ${this.userName}`);
  }
}

const userDetails = new Teacher("debjit", "d@gmail.com", "1234");
userDetails.addcourse();
const logUser = new User("krishnendu");
logUser.logme();

console.log(userDetails instanceof Teacher);

// staticPROP
class User2 {
  constructor(name) {
    this.name = name;
  }
  logme() {
    console.log(`user name is ${this.userName}`);
  }

  createId() {
    return "123";
  }
}

const krish = new User2("ranju");
console.log(krish.createId())

class Krish {
  constructor(email) {
    this.email = email;
  }

  static setEmail() {
    return `${this.email}123`
  }
}

class Teachers extends Krish {
  constructor(name, email) {
    super(email);
    this.name = name
  }
}

const iphone = new Teachers('iphone', 'i@gmail.com')
console.log(iphone.setEmail());
