export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building && this.evacuationWarningMessage
      === Building.prototype.evacuationWarningMessage)

      if (typeof sqft !== 'number') {
        throw new TypeError('sqft must be a number');
      }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(valeur) {
    if (typeof valeur !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = valeur;
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
