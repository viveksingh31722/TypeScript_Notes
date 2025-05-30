interface User {
  readonly dbId: number,
  email: string,
  userId: number,
  googleId? : string,
  // startTrail: () => string Thi is method to define a function in an interface.
  startTrail(): string, // This is one more way to define a function in an interface.
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubId?: string
}

interface Admin extends User {
  role: "admin" | "user" | "ta"
}
const vivek: Admin & User ={dbId: 23, email:"v@v.com", userId: 1234, role: "admin", startTrail() {
  return "trail started";
},
getCoupon(name: string, off: 10) {
  return 10;
},
githubId: "vivek43"
}

//Below is the example of intersection type, which is used to combine multiple types into one.
const singh: Admin  ={dbId: 23, email:"v@v.com", userId: 1234, role: "admin", startTrail() {
  return "trail started";
},
getCoupon(name: string, off: 10) {
  return 10;
},
githubId: "vivek43"
}


vivek.email = "singh@gmail.com";
// vivek.dbId = 35; // we can not change the value of readonly properties, because they are immutable. 

// We can also use the inheritance in interfaces.



 