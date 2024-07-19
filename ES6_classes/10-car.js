/* eslint-disable */
export default class Car {
  constructor(brand, motor, color) {
    if (typeof brand !== 'string') {
      throw new TypeError('brand must be a string');
    }
    this._brand = brand;
    if (typeof motor !== 'string') {
      throw new TypeError('motor must be a string');
    }
    this._motor = motor;
    if (typeof color !== 'string') {
      throw new TypeError('color must be a string');
    }
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(marque) {
    if (typeof marque !== 'string') {
      throw new TypeError('brand must be a string');
    }
    this._brand = marque;
  }

  get motor() {
    return this._motor;
  }

  set motor(moteur) {
    if (typeof moteur !== 'string') {
      throw new TypeError('motor must be a string');
    }
    this._motor = moteur;
  }

  get color() {
    return this._color;
  }

  set color(couleur) {
    if (typeof couleur !== 'string') {
      throw new TypeError('color must be a string');
    }
    this._color = couleur;
  }

  cloneCar() {
    const constructor = Reflect.getPrototypeOf(this).constructor;
    return new constructor(this._brand, this._motor, this._color);
  }
}
