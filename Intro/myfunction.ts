function addTwo(num: number): number {
  
  return num + 2;
  // return "hello"; can't return string because the function is defined to return a number;
}
function getUpper(val : string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){

}

let loginUser = (name:string, email:string,  isPaid:boolean = false) => {};

addTwo(5);
getUpper("vivek");

signUpUser("vivek", "vivek@gmail.com", "singh122", false);
loginUser("h", "h@h.com");



// function getValue(myVal:number) : string | boolean {
//   if(myVal > 5) {
//     return true;
//   }
//   return "200 OK";
// } This function can return either a string or a boolean based on the input value.

const  getHello = (s : string) : string => {
  return "";
}; // This function is defined to return a string, so it must return a string value.

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];

heros.map((hero): string => {
  return `hero is ${hero}`;
  // return 1; this would cause an error because the function is expected to return a string.
})

function consoleError(errmsg: string): void{
  console.log(errmsg);
}

function handleError(errmsg: string):never{
  throw new Error(errmsg);
}

export{}; 