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
  // private _courseCount = 1; // private properties are not accessible outside the class.
  protected _courseCount = 1; // Protected properties are accessible within the class and the class that extends this class.
 
  private readonly city: string = ""; // here i have used the private keyword, so this property is not accessible outside the class.
  constructor(public email: string, public name: string, private userId: string) {
    
  }

  private deletetoken() {
    console.log("token deleted");
    
  }

  get getAppleEmail(): string { // These getter and setter are used to access the private properties, but we can use them to access the public properties also.
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set coursecount(courseNum: number) { // In setters we can not return anything, we can only assign the value.
    if (courseNum <= 1) {
      throw new Error("course count should be more than 1");
    }
    this._courseCount = courseNum;
  }



}

// Inheritance, extends keyword is used to inherit the properties of the parent class.
class subUser extends User {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

const vivek = new User("h2@gmail.com", "vivek", "singh123");
// vivek.city = "Lucknow";
vivek.email = "singh@gmail.com";
// User._courseCount = 10; we can not access the protected properties outside the class or extended class.

// vivek.city; you can not access the city here because it is private, so it will give an error;

// Getter and setter

// set setAppleEmail(email: string){}

export{};

  