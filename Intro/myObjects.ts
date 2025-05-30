// const User = {
//   name: "vivek",
//   email: "vivek@gmail.com",
//   isActive: true,

// }

// function createUser({name: string, isPaid: boolean}){}

// createUser({name:"vivek", isPaid: false, email: "h@h.com"});

// let newUser = {name:"vivek", isPaid: false, email: "h@h.com"};
// createUser(newUser);

// function createCourse():{name: string, price: number} {
//   return {name: "react", price: 399};
// } // This function returns as empty object.

// Type Aliases.
// Type Aliases allow us to create a new name for an existing type.
// They are useful for creating more readable and maintainable code.
// They can be used to define complex types, such as objects, arrays, and functions.

// type User = {
//   name: string;
//   email: string;
//   isActive: boolean;
// }

// function createUser(user: User): User{
//   return{name: "", email: "", isActive: false};
// }

// createUser({name: "", email: "", isActive: false})


type User = {
  readonly id: string // readonly properties cannot be changed after creation
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number;
}

type cardNumber = {
  cardNumber: string;
}

type cardDate = {
  cardDate: string;
}

type cardDetails = cardNumber & cardDate & { // In this case, we are combining multiple types into one. and we can use it as a type.
  cardCvv: number;
}
let myUser: User = {
  id: "124",
  name: "vivek",
  email: "v@singh.com",
  isActive: true
}

myUser.email = "h3@gamil.com";
// myUser.id = "232"; // This will give an error because id is readonly.



export{};