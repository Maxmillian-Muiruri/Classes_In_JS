class Animal {}

class Dog extends Animal {}

const animal = new Animal();
const dog = new Dog();

console.log(animal instanceof Animal); // Outputs: true
console.log(animal instanceof Dog); // Outputs: false
console.log(dog instanceof Animal); // Outputs: true
console.log(dog instanceof Dog); // Outputs: true

// We define two classes, Animal and Dog, where Dog extends Animal.
// We create instances of these classes, animal and dog.
// We use the instanceof operator to check if these instances belong to specific classes.
// animal instanceof Animal returns true because animal is an instance of the Animal class.
// animal instanceof Dog returns false because animal is not an instance of the Dog class or any of its subclasses.
// dog instanceof Animal returns true because dog is an instance of the Animal class (and Dog is a subclass of Animal).
// dog instanceof Dog returns true because dog is an instance of the Dog class.
