## instanceof

## The instanceof operator allows to check whether an object belongs to a certain class. It also takes inheritance into account.

## is used to check whether an object belongs to a particular class or constructor function's prototype chain. It returns true if the object is an instance of the specified class or a subclass of it; otherwise, it returns false.

## syntax example

```js
obj instanceof Class;
```

## It returns true if obj belongs to the Class or a class inheriting from it.

## example

```js
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
alert(rabbit instanceof Rabbit); // true
```

## It also works with constructor functions:

```js
// instead of class
function Rabbit() {}

alert(new Rabbit() instanceof Rabbit); // true
```

## It also works with built-in classes like Array:

```js
let arr = [1, 2, 3];
alert(arr instanceof Array); // true
alert(arr instanceof Object); // true
```

## obj instanceof Class works as follows:

## If there’s a static method Symbol.hasInstance, then just call it: Class[Symbol.hasInstance](obj). It should return either true or false, and we’re done. That’s how we can customize the behavior of instanceof.

### example:

```js
// setup instanceOf check that assumes that
// anything with canEat property is an animal
class Animal {
  static [Symbol.hasInstance](obj) {
    if (obj.canEat) return true;
  }
}

let obj = { canEat: true };

alert(obj instanceof Animal); // true: Animal[Symbol.hasInstance](obj) is called
```

## Most classes do not have Symbol.hasInstance. In that case, the standard logic is used: obj instanceOf Class checks whether Class.prototype is equal to one of the prototypes in the obj prototype chain.

### it compare one after another:

### example

```js
obj.__proto__ === Class.prototype?
obj.__proto__.__proto__ === Class.prototype?
obj.__proto__.__proto__.__proto__ === Class.prototype?
...
// if any answer is true, return true
// otherwise, if we reached the end of the chain, return false
```

### In the example above rabbit.**proto** === Rabbit.prototype, so that gives the answer immediately.

## Object.prototype.toString for the type

### plain objects are converted to string as [object Object]:

### example

```js
let obj = {};

alert(obj); // [object Object]
alert(obj.toString()); // the same
```

## Their implementation of toString. But there’s a hidden feature that makes toString actually much more powerful than that. We can use it as an extended typeof and an alternative for instanceof.

### the built-in toString can be extracted from the object and executed in the context of any other value. And its result depends on that value.

### example

## For a number, it will be [object Number]

## For a boolean, it will be [object Boolean]

## For null: [object Null]

## For undefined: [object Undefined]

## For arrays: [object Array]

## Symbol.toStringTag

### The behavior of Object toString can be customized using a special object property Symbol.toStringTag.

## example

```js
let user = {
  [Symbol.toStringTag]: "User",
};

alert({}.toString.call(user)); // [object User]
```

## typeof primitives string

## {}.toString primitives, built-in objects, objects with Symbol.toStringTag string

## instanceof objects true/false

# Mixins

# Mixins in JavaScript are a way to add functionality to a class by combining the methods and properties of multiple objects or classes. They allow you to modularize and reuse code across different classes without using traditional inheritance.

## Mixins allow you to compose classes with different functionalities without creating deep inheritance hierarchies. They promote code reuse and modularization, making it easier to manage and extend your codebase.

## here the mixin sayHiMixin is used to add some “speech” for User:

```js
// mixin
let sayHiMixin = {
  sayHi() {
    alert(`Hello ${this.name}`);
  },
  sayBye() {
    alert(`Bye ${this.name}`);
  },
};

// usage:
class User {
  constructor(name) {
    this.name = name;
  }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!
```

<!-- Mixin – is a generic object-oriented programming term: a class that contains methods for other classes. -->

## EventMixin

## An EventMixin in JavaScript is a common pattern used to add event handling capabilities to objects or classes. It allows objects to register event listeners, trigger events, and manage event subscriptions.

```js
const EventMixin = {
  // Initialize event handlers map
  _events: {},

  // Register an event listener
  on(event, handler) {
    if (!this._events[event]) {
      this._events[event] = [];
    }
    this._events[event].push(handler);
  },

  // Remove an event listener
  off(event, handler) {
    if (!this._events[event]) return;
    this._events[event] = this._events[event].filter((fn) => fn !== handler);
  },

  // Trigger an event
  trigger(event, ...args) {
    if (!this._events[event]) return;
    this._events[event].forEach((handler) => handler.apply(this, args));
  },
};

// Example usage:
class Button {
  constructor(label) {
    this.label = label;
    // Mix in EventMixin
    Object.assign(this, EventMixin);
  }

  click() {
    this.trigger("click", this.label);
  }
}

// Create a button instance
const button = new Button("Click Me");

// Register an event listener
button.on("click", (label) => {
  console.log(`Button clicked: ${label}`);
});

// Trigger the click event
button.click(); // Outputs: "Button clicked: Click Me"
```

## We define an EventMixin object that contains methods for event handling: on to register event listeners, off to remove event listeners, and trigger to trigger events.

## The Button class is defined with a constructor that takes a label parameter and initializes it. We then mix in the EventMixin to the Button class using Object.assign(this, EventMixin).

## We create an instance of Button named button.

## We register an event listener for the 'click' event using the on method.

## We trigger the 'click' event using the click method of the Button instance.
