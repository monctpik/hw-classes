"use strict";
//                                                                  RangeValidator

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get range() {
    return [this._from, this._to]
  }
  get from() {
    return this._from;
  }
  get to() {
    return this._to;
  }
  set from(from) {
    if (from >= this._to) {
      throw new RangeError("The to is greater than the from");
    }
    this._from = from;
  }
   set to(to) {
    if (to <= this._from) {
      throw new RangeError("From less than to");
    }
    this._to = to;
  }

  validate(num) {
    if (num >= this._from && num <= this._to) {
      return num;
    }
    throw new RangeError("Value is not valid");
  }
}

const testRange = new RangeValidator(1,33)
console.log(testRange.range)

//                                                                              Figure3D
class Figure3D {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    getVolume() {
      return null;
    }

  }
  //                                                                            BALL
  class Ball extends Figure3D {
    constructor(radius) {
      super("Ball");
      this.radius = radius;
    }
    getVolume() {
        // return (4 / 3) * Math.PI**3
        return (4 / 3) * Math.PI * Math.pow(this.radius, 3);
    }
  }
  //                                                                            CE=YLINDER
  class Cylinder extends Figure3D {
    constructor(r, h) {
      super("Cylinder");
      this.r = r;
      this.h = h;
    }
    getVolume() {
      return Math.PI * this.r * this.r * this.h
    }
  }
  //                                                                             CUBE
  class Cube extends Figure3D {
    constructor(fringe) {
      super("Cube");
      this.fringe = fringe;
    }
    getVolume() {
      return Math.pow(this.fringe, 3);
    }
  }
  const ball2 = new Ball(3)
  console.log(ball2.getVolume())

  const cyl1 = new Cylinder(3,5)
  console.log(cyl1.getVolume())

  const cube1 = new Cube(20)
  console.log(cube1.getVolume())