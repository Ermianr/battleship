class Ship {
  constructor (width) {
    this.width = width
    this.hits = 0
    this.sunk = false
  }

  hit () {
    this.hits++
  }

  isSunk () {
    if (this.hits >= this.width) {
      this.sunk = true
    }
  }
}

export { Ship }
