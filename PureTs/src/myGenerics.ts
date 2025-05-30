const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean) : number | boolean {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

// Now we are going to create a generic function, that will take any type of value and return the same type of value which is passed to it, unlike the any keyword, which can take any type of number, string or boolean as a value and can return another type of value,
// Ex: it will take the value as 3 and can return the value as "3".
// But in generic function, it will take the value as 3 and return the value as 3 only, it will not change the type of the value.

function identityThree<Type>(val: Type) : Type { // This generic function is defined with a type parameter <Type>, Which will take the same type of value
  return val;                                    // and return the same type.
}

// identityThree(5); // Here we are passing the value as 5, which is a number, so the return type will also be a number.
// identityThree("Vivek"); // Here we are passing the value as "3", which is a string, so the return type will also be a string.

// The different syntax for the generic function.

function identityFour<T>(val: T) : T {
  return val
} // This function is same as the above function, but here we are using T as the type parameter instead of Type, which is just a naming convention, you can use any name for the type parameter, but it is recommended to use T as it is a common convention in TypeScript.

interface Bootle {
  brand: string,
  type: number
}

// identityFour<Bootle>({brand: "Milton", type: 1});

// Taking array as type parameter in the generic function.

function getSearchProducts<T>(products: T[]) : T { // Here the return type is T, which means it is one of the value of type T 'array'.
  // We can do some operations on the products array, like filtering, mapping, etc.
  const myIndex = 3
  return products[myIndex];
}
// Arrow function syntax for the generic function.
// const getSearchProducts = <T>() : T// return type. => {}; Syntax for the generic arrow function, just added the <T> before the function name. 
 
const getMoreSearchProducts = <T>(product: T[]) : T => {
  const myIndex = 2;
  return product[myIndex];
}