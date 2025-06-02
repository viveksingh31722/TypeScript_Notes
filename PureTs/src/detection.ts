// Narrowing
// Narrowing is used to explicitly tell the program the type of value we are providing, it first check the type then move forward for other operation.
// Type narrowing is the process of refining a variable's type within a scope using type checks (like typeof or instanceof), allowing safe operations specific to that type.


function detectType(val: number | string) {
  if(typeof val === 'string'){
    return val.toLocaleLowerCase();
  }

  return val + 3;
}


function provideId(id: string | null){
  if(!id){
    console.log("Please provide ID");
  }
  return id?.toLowerCase();
}

interface User {
  name: string,
  email: string
}

interface Admin {
  name: string,
  email: string,
  isAdmin: boolean
}

function isAdminAccount(account: User | Admin){ 
  if("isAdmin" in account){
    return account.isAdmin;
  }
}

// What dose the above function dose
// The function isAdmin accepts either a User or an Admin.

// It checks:
// ➤ "Does this object have an isAdmin property?"

// If yes, that means it must be an Admin, so it returns account.isAdmin.



// InstanceOf Narrowing, 
//What is instanceof?
// 👉 It checks what class or type an object was created from.

// Think of it like this:
// "Is this object made from this class?"

// If yes, we know what kind of object it is — and can safely use its properties or methods.

// example below:

class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function speak(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // TypeScript knows it's a Dog now ✅
  } else {
    animal.meow(); // So it must be a Cat here ✅
  }
}

// Below is the example of type predicate.
// The whole syntax explain that, the first function check weather it is fish or not,
// if pet as fish . swim and it return either true or false, its fish.
// getFood function is checking the pet food using the isFish function,
// But still they wont identify the return type, so for that we use "type predicate" in example we can see that we have explicitly defined the return type as "pet is fish"

type Fish = {swim: () => void};
type Bird = {fly: () => void};

function isFish(pet: Fish | Bird): pet is Fish{
  return (pet as Fish).swim !== undefined
}

 function getFood(pet: Fish | Bird){
  if(isFish(pet)){
    pet
    return "Fish Food";
  }else{
    pet
    return "Bird Food";
  }
 }

//Discriminated Union

interface Circle{
  kind: "Circle",
  radius: number
}

interface Square{
  kind: "Square",
  side: number
}

interface Rectangle{
  kind: "Rectangle",
  length: number,
  width: number
}

type Shape = Circle | Square | Rectangle;

function getTrueShape(Shape: Shape){
   if(Shape.kind === "Circle"){
    return Math.PI * Shape.radius ** 2;
  }

  // return Shape.side * Shape.side;
}

//Exhaustiveness Checking (Below the function it is explain in best way possible just after example)

function getArea(Shape: Shape){
  switch(Shape.kind){
    case "Circle":
      return Math.PI * Shape.radius ** 2;
    case "Square":
      return Shape.side * Shape.side;
    case "Rectangle":
      return Shape.length * Shape.width;
    default: 
      const _defaultForShape: never = Shape
      return _defaultForShape;   
  }
}

// It takes a Shape, which could be a:

// ✅ Circle

// ✅ Square

// ✅ Rectangle

// You’re calculating the area depending on the type.

// 🤔 What is never in default?
// never means:

// ❌ This should never happen.

// 🧠 Why use this default case?
// You're doing something very smart:

// 💡 TypeScript Safety Check!
// You're telling TypeScript:

// "If someone adds a new shape later (like Triangle), and forgets to handle it in the switch... please throw an error!"

// Let’s say tomorrow someone updates your code like this:

// ts
// Copy
// Edit
// type Shape = Circle | Square | Rectangle | Triangle;
// If you forget to add a case "Triangle": in getArea, then:

// ts
// Copy
// Edit
// const _defaultForShape: never = Shape; // ❌ ERROR!
// TypeScript will scream because Triangle is not never.
// This helps you catch bugs early 🔍✅

// 🪄 It acts like a "Type Guard Dog" 🐶
// It says:

// "Hey! You forgot to handle a new shape! Fix it before something breaks!"




  