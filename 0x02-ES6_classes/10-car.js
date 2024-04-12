export default class Car {
  constructor(brand, motor, colour) {
    this._brand = brand;
    this._motor = motor;
    this._colour = colour;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._colour);
  }
}
