## Class basic syntax

### In JavaScript, a class is a kind of function.

### In object-oriented programming, a class is an extensible program-code-template for creating objects, providing initial values for state (member variables) and implementations of behavior (member functions or methods).

```js
class MyClass {
  // class methods
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  ...
}
```

### use new MyClass() to create a new object with all the listed methods.

### The constructor() method is called automatically by new, so we can initialize the object there.

### example

```js
class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }
}

// Usage:
let user = new User("John");
user.sayHi();
```

## When new User("John") is called:

### A new object is created.

### The constructor runs with the given argument and assigns it to this.name.

### So, what exactly is a class?

```js
class User {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    alert(this.name);
  }
}

// proof: User is a function
alert(typeof User); // function
```

## class User {...}

## 1. Creates a function named User, that becomes the result of the class declaration. The function code is taken from the constructor method (assumed empty if we don’t write such method).

## 2. Stores class methods, such as sayHi, in User.prototype.

## After new User object is created, when we call its method, it’s taken from the prototype, So the object has access to class methods.

## there are important differences.

## 1. a function created by class is labelled by a special internal property [[IsClassConstructor]]: true. So it’s not entirely the same as creating it manually.

### The language checks for that property in a variety of places. For example, unlike a regular function, it must be called with new:

### example

```js
// 1. Create constructor function
function User(name) {
  this.name = name;
}
// a function prototype has "constructor" property by default,
// so we don't need to create it

// 2. Add the method to prototype
User.prototype.sayHi = function () {
  alert(this.name);
};

// Usage:
let user = new User("John");
user.sayHi();
```

## 2. Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".

## 3. Classes always use strict. All code inside the class construct is automatically in strict mode.

## Just like functions, classes can be defined inside another expression,

### example

```js
let User = class {
  sayHi() {
    alert("Hello");
  }
};
```

## Just like literal objects, classes may include getters/setters

## example

```js
class User {
  constructor(name) {
    // invokes the setter
    this.name = name;
  }

  get name() {
    // get name
    return this._name;
  }

  set name(value) {
    //set name
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }
}

let user = new User("John");
alert(user.name); // John

user = new User(""); // Name is too short.
``;
```
