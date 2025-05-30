"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
    // return "hello"; can't return string because the function is defined to return a number;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, password, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
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
var getHello = function (s) {
    return "";
}; // This function is defined to return a string, so it must return a string value.
var heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map(function (hero) {
    return "hero is ".concat(hero);
    // return 1; this would cause an error because the function is expected to return a string.
});
