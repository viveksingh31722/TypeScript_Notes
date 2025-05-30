interface takePhoto { // just take this example for understanding, here we are just created a interface, that take photos and have some properties, and other classes are implementing 
  cameraMode: string, // this interface,
  filter: string,
  burst: number
}

interface story {
  createStory(): void
}

class Instagram implements takePhoto { // For implementing the interface, we need to use the implements keyword, and then we need to define the properties and methods of the interface in the class.
  constructor (
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements takePhoto, story {
  constructor (
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("story created");
  }
}

// Interface can be used to implement multiple classes.
// Interface are just like abstract classes, but in this you can not define the body of the method, you can only define the variables and functions need to be implemented in the classes.