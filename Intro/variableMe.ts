let greetings: string = "Hello, Vivek!";
// greetings = 6; This is will throw an error
console.log(greetings);
greetings.toLocaleLowerCase();

//Number
let userId:number = 12351.3;
//or
// userId = "vivek"; type string is not assignable to type number.
userId.toFixed();
console.log(userId);

//Boolean
let isLoggedIn: boolean = true;

// any

let hero: string;

function getHero() {
  return "Thor";
}
hero = getHero();
console.log(hero);


