abstract class TakePhoto { // The abstract class is an blueprint for other classes, we can not create objects of the abstract and interface, but we can create objects of the classes that are implementing or inheriting the abstract class or interface.
  // we can define properties and methods in the abstract class, but we can not create objects of the abstract class.
  constructor(
    public cameraMode: string,
    public filter: string,
  ) {}

  abstract getSepia(): void

  getReelTime(): number { // the difference is that, the abstract class allow you to inherit the data from it but interface don't, 
    return 9;            // In abstract class, you can define the body of the method, but in interface you can not define the body of the method.
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter); // In TypeScript (and JavaScript with ES6+), the super keyword is used inside a subclass to call the constructor of its parent class.
  }

  getSepia():void {
    console.log("Sepia filter applied");
  }

}

const vc = new Instagram("Normal", "vintage", 5);
vc.getReelTime();
vc.getSepia();

export{}
