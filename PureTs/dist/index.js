"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("typescript is here still");
console.log("typescript is amazing");
// class User {
//   public email: string
//   name: string
//   // city?: string;
//   // or
//   private readonly city: string = ""; // here i have used the private keyword, so this property is not accessible outside the class.
//   constructor(email: string, name: string) {
//     this.email = email; // this.email is targeting the class property, means this email is passed to above declared email, name etc.
//     this.name = name;
//     this.city = "Delhi"; // you can assess the property here, but not outside the class.
//   }
// }
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = ""; // here i have used the private keyword, so this property is not accessible outside the class.
    }
}
const vivek = new User("h2@gmail.com", "vivek", "singh123");
// vivek.city = "Lucknow";
vivek.email = "singh@gmail.com";

