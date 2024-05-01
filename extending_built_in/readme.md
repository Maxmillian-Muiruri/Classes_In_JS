## Built-in classes like Array, Map and others are extendable also.

## Built-in classes like Array, Map and others are extendable also.

## For instance, here PowerArray inherits from the native Array:

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

let filteredArr = arr.filter((item) => item >= 10);
alert(filteredArr); // 10, 50
alert(filteredArr.isEmpty()); // false
```

## Please note a very interesting thing. Built-in methods like filter, map and others – return new objects of exactly the inherited type PowerArray. Their internal implementation uses the object’s constructor property for that.In the example above,

```js
arr.constructor === PowerArray;
```

### When arr.filter() is called, it internally creates the new array of results using exactly arr.constructor, not basic Array. That’s actually very cool, because we can keep using PowerArray methods further on the result.

## When arr.filter() is called, it internally creates the new array of results using exactly arr.constructor, not basic Array. That’s actually very cool, because we can keep using PowerArray methods further on the result.\

## We can add a special static getter Symbol.species to the class. If it exists, it should return the constructor that JavaScript will use internally to create new entities in map, filter

### built-in methods like map or filter to return regular arrays, we can return Array in Symbol.species

## example

```js
class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  // built-in methods will use this as the constructor
  static get [Symbol.species]() {
    return Array;
  }
}

let arr = new PowerArray(1, 2, 5, 10, 50);
alert(arr.isEmpty()); // false

// filter creates new array using arr.constructor[Symbol.species] as constructor
let filteredArr = arr.filter((item) => item >= 10);

// filteredArr is not PowerArray, but Array
alert(filteredArr.isEmpty()); // Error: filteredArr.isEm
```

### No static inheritance in built-ins

### Built-in objects have their own static methods, for instance Object.keys, Array.isArray

## both Array and Date inherit from Object, so their instances have methods from Object.prototype. But Array.[[Prototype]] does not reference Object, so there’s no, for instance, Array.keys() (or Date.keys()) static method.
