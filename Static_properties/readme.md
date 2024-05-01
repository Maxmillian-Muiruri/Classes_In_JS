## Static properties and methods

## Static properties and methods in JavaScript classes are properties and methods that belong to the class itself rather than instances of the class. This means they are accessed directly on the class, not on instances of the class. Static properties and methods are useful for defining functionality or data that is shared among all instances of the class.

## example

```js
class MyClass {
  // Static property
  static myStaticProperty = "Hello";

  // Static method
  static myStaticMethod() {
    return "World";
  }

  // Instance method
  myMethod() {
    return "Instance method";
  }
}

// Accessing static property
console.log(MyClass.myStaticProperty); // Output: "Hello"

// Calling static method
console.log(MyClass.myStaticMethod()); // Output: "World"

// Creating an instance of MyClass
const instance = new MyClass();

// Calling instance method
console.log(instance.myMethod()); // Output: "Instance method"
```

## myStaticProperty is a static property of the MyClass class. It can be accessed directly on the class itself (MyClass.myStaticProperty).

## myStaticMethod is a static method of the MyClass class. It can also be accessed directly on the class (MyClass.myStaticMethod()).

## myMethod is an instance method of the MyClass class. It is defined without the static keyword and is meant to be called on instances of the class (instance.myMethod())

## Static properties are also possible, they look like regular class properties, but prepended by static

```js
class Article {
  static publisher = "Ilya Kantor";
}

alert(Article.publisher); // Ilya Kantor
```

# usage of static properties, methods, and inheritance in JavaScript classes.

## syntax

```js
class MyClass {
  static property = ...;

  static method() {
    ...
  }
}
```

### static properties and methods can be used for shared functionality and data across all instances of a class, and how inheritance works in JavaScript classes

```js
class Animal {
  static planet = "Earth";

  constructor(name, speed) {
    this.speed = speed;
    this.name = name;
  }

  run(speed = 0) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  static compare(animalA, animalB) {
    return animalA.speed - animalB.speed;
  }
}

// Inherit from Animal
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} hides!`);
  }
}

let rabbits = [new Rabbit("White Rabbit", 10), new Rabbit("Black Rabbit", 5)];

rabbits.sort(Rabbit.compare);

rabbits[0].run(); // Black Rabbit runs with speed 5.

alert(Rabbit.planet); // Earth
```

## In the Animal class, a static property planet is defined, representing the planet where the animals reside.

## The constructor initializes properties name and speed of instances of the class.

## The run method increases the speed of the animal and displays an alert message indicating its new speed.

## The static method compare takes two Animal objects and compares their speeds.

## The Rabbit class extends the Animal class, inheriting its properties and methods.

## It introduces its own method hide, which alerts that the rabbit is hiding.

## Instances of Rabbit class are created and stored in an array.

## The array of rabbits is sorted using the static method compare, which sorts rabbits based on their speeds.

## The run method is called on the rabbit with the lowest speed.

## The static property planet is accessed directly on the Rabbit class, displaying "Earth" in an alert.
