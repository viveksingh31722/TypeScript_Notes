// Union in typeScript
// Union allows to us to define a variable that can hold multiple types of values.
// Its union of types, Like we can define the different "types" of values that a variable can hold.

let score: number | string = 33;

score = 42;
score = "Fifty";

// We can create our own type using type keyword and can use it in union.

type User = {
  name: string;
  id: number;
}

type Admin = {
  Username: string;
  id: number;
}

let user1: User | Admin = {
  name: "vivek",
  id: 1
}

user1 = {
  Username: "vivek",
  id: 1
};

// function getDbId(Id: number | string) { // So in this function we can pass either
//   console.log(`DB Id is : ${Id}`);
// }

function getDbId(Id: number | string) {
  if(typeof Id === "string"){
    Id.toLocaleLowerCase();
  }
}

getDbId(3);
getDbId("3");

// Arrays
 const data1: number[] = [1, 2, 3, 4,];
 const data2: string[] = ["1", "2", "3", "4"];
 const data3: number[] | string[] | boolean[] = ["2", "3"]; // so in this case we can pass either all the numbers or all the strings.
 const data4: (number | string | boolean)[] = ["2", "3", 4, 2, true]; // so in this case we can pass all the numbers, strings and boolean values.

 let seatAllotment: "Side" | "Middle"  | "Window";

//seatAllotment = "crew"; // This will throw an error because "crew" is not part of the union type.
 seatAllotment = "Middle"; // This is valid as "Middle" is part of the union type.

 
export{};