/** @format */

class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }
  //   set password(value) {
  //     this.password = value;
  //   }
  // eta korar fole maximum call stacj hye jaye kano ki constructor eo value ache ekhano valur uthche so eder mdhya race type start hye jaye and era bare bare nije der call korte thake

  set password(value) {
    this._password = value.toUpperCase();
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}

const user1 = new User("debjit", "123");
console.log(user1.password);
console.log(user1.email);

// jodi kothao kichu er information na dite chao tokhon getter use kora jete pare..akbar get use korle set korte hye

// get set with properties based
function functionOne(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this.email.toUpperCase;
    },
    set: function (value) {
      this.email = value;
    },
  });

  Object.defineProperty(this, "password", {
    get: function () {
      return this.password.toUpperCase;
    },
    set: function (value) {
      this.password = value;
    },
  });
}

const user2 = new functionOne("debjit", 1234);
console.log(user1.email);

// get set with Object

const user = {
  _email: "debjitpanja",
  _password: "2525",

  get email() {
    return this._email.toUpperCase();
  },

  set email(value) {
    this._email = value;
  },
};

const user3 = Object.create(user);
console.log(user3.email);

// "".create" is a factory function
