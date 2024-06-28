# Javascript and Classes
## Does javascript really have classes?
Yes and no. JavaScript  doesn't have classes in the traditional sense like Java or C++. However, starting with ECMAScript 6 (ES6) released in 2015, JavaScript introduced a class syntax that mimics class-based programming.

Here's the breakdown:

- Prototype-based: At its core, JavaScript is a prototype-based language. Objects inherit properties and methods from their prototypes.
- Class syntax (ES6+): This syntax provides a familiar way to define objects with properties and methods, similar to classes in other languages.
- Syntactic sugar: The class syntax is essentially syntactic sugar on top of the existing prototype-based system. It offers a cleaner way to structure code and create objects.

So, while JavaScript doesn't have true classes, the class syntax provides a convenient way to write object-oriented code.



## OOP
OOP is programming paradigm (style of writing a code).
## Object
- collection of properties and methods
- toLowerCase, new Promises, date

## why use OOP

## parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
Abstraction
Encapsulation
Inheritance
Polymorphism
# Prototype vs Functional vs OOP

## Prototype-Based Programming
- **Core concept**: Objects inherit properties and behaviors from a prototype object. When you create a new object, it chains back to a prototype object to access its functionalities.
- **JavaScript's foundation**: This is the underlying mechanism for object-oriented programming in JavaScript.
- **Benefits**:
  - Code reusability: By inheriting from prototypes, you avoid duplicating code for common functionalities.
  - Flexibility: You can modify the prototype to change the behavior of all objects that inherit from it.
- **Drawbacks**:
  - Debugging complexity: Issues can arise due to inheritance chains and potential for unintended modifications.
  - Less familiar for OOP developers: Might require a shift in thinking compared to traditional class-based languages.

## Functional Programming
- **Core concept**: Focuses on pure functions (always return the same output for the same input) and immutable data (data doesn't change after creation).
- **Not strictly OOP**: Functional programming is a separate paradigm, but its techniques can be used within JavaScript alongside OOP or prototypes.
- **Benefits**:
  - Code clarity: Pure functions lead to more predictable and easier-to-reason-about code.
  - Immutability promotes data security and simplifies debugging.
- **Drawbacks**:
  - Might not be suitable for all problems: Object-oriented approaches can be more intuitive for certain scenarios.
  - Requires a different mindset compared to traditional OOP.

## Object-Oriented Programming (OOP)
- **Core concept**: Organizes code around objects that encapsulate data (properties) and behavior (methods). Objects interact with each other through messages.
- **Class-based vs. Prototype-based**: Traditionally, OOP uses classes as blueprints for creating objects. JavaScript offers a class syntax (ES6+) that mimics this structure, but underneath, it still relies on prototypes for inheritance.
- **Benefits**:
  - Modular code: Objects group data and functionality together, promoting maintainability and reusability.
  - Real-world modeling: OOP concepts often map well to real-world entities and their interactions.
- **Drawbacks**:
  - Can lead to overly complex hierarchies: Extensive class inheritance structures can become cumbersome to manage.
  - Not always the most performant approach: Functional techniques can sometimes be more efficient.
