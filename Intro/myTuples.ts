// The tuple type is a special type that allows you to define an array with fixed number of elements of different types.
// It is similar to an array, but with a fixed number of elements and each element can have a different type.

const user: (string  | number)[] = [1, "vivek"]; // In this order of defined array can be changed, and can used to put the values of both types randomly.

let user1: [number, string, boolean ?]; // In this order of defined array cannot be changed, and can used to put the values of both types in the same order as defined.

user1 = [1, "vivek"];

let rgb: [number, number, number];
rgb = [255, 123, 112];

// Example of tuple with optional element.
type User5 = [number, string];

let car: User5 = [1, "BMW"];