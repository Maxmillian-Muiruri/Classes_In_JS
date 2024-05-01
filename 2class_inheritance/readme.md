## Class inheritance

## Class inheritance is a way for one class to extend another class.

## So we can create new functionality on top of the existing.

## Overriding a method

## In JavaScript classes, you can override methods inherited from parent classes in child classes. This allows you to provide a specialized implementation of a method in the child class that differs from the implementation in the parent class.

## Method overriding allows you to create more specialized behavior in subclasses while still benefiting from the structure and functionality provided by the parent class. It's a fundamental concept in object-oriented programming and is commonly used for building class hierarchies with polymorphic behavior.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a generic sound.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log(`${this.name} barks!`);
  }
}

const animal = new Animal("Animal");
const dog = new Dog("Buddy");

animal.makeSound(); // Outputs: "Animal makes a generic sound."
dog.makeSound(); // Outputs: "Buddy barks!"
```

## The Animal class has a method makeSound that outputs a generic sound message.

## The Dog class extends Animal and overrides the makeSound method with its own implementation that makes the dog bark.

## When you create instances of Animal and Dog and call the makeSound method on them, you get different outputs depending on which class the instance belongs to. This demonstrates method overriding in action.

## Overriding constructor

## Overriding the constructor method in a child class gives you the flexibility to provide specialized initialization logic specific to that child class, while still benefiting from the shared behavior defined in the parent class. This is a powerful feature of object-oriented programming in JavaScript, allowing you to create class hierarchies that are both flexible and reusable.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} makes a generic sound.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} barks!`);
  }
}

const animal = new Animal("Animal");
const dog = new Dog("Buddy", "Labrador");

console.log(animal.name); // Output: Animal
console.log(dog.name); // Output: Buddy
console.log(dog.breed); // Output: Labrador
```

## The Animal class has a constructor that takes a name parameter and initializes the name property of the instance.

## The Dog class extends Animal and has its own constructor. Inside the Dog constructor, super(name) is called to invoke the constructor of the parent class (Animal) with the provided name. Additionally, this.breed = breed initializes the breed property specific to Dog instances.

## Instances of Animal and Dog are created with different constructor behaviors. While Animal instances only have a name property initialized, Dog instances have both name and breed properties initialized.

## [[HomeObject]]

### When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.

## how it works,

```js
let animal = {
  name: "Animal",
  eat() {
    // animal.eat.[[HomeObject]] == animal
    alert(`${this.name} eats.`);
  },
};

let rabbit = {
  __proto__: animal,
  name: "Rabbit",
  eat() {
    // rabbit.eat.[[HomeObject]] == rabbit
    super.eat();
  },
};

let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat() {
    // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  },
};

// works correctly
longEar.eat(); // Long Ear eats.
```

## To extend a class: class Child extends Parent:

### That means Child.prototype.**proto** will be Parent.prototype, so methods are inherited.

## When overriding a constructor:

### We must call parent constructor as super() in Child constructor before using this.

## vWhen overriding another method:

### We can use super.method() in a Child method to call Parent method.

## Internals:

### Methods remember their class/object in the internal [[HomeObject]] property. That’s how super resolves parent methods.

### So it’s not safe to copy a method with super from one object to another.

##
