class Ducktypium {
  constructor(color) {
    if (color == "red" || color == "blue" || color == "yellow") {
      this.color = color;
    } else {
      throw new TypeError('Invalid Color')
    }

    this.calibrationSequence = [];
  }
  refract(x) {
    if (x == "red" || x == "blue" || x == "yellow") {
        if (x == this.color) {
            return x;
          }
          if ((x === "red" && this.color == "blue") || (x == "blue" && this.color == "red")) {
            return "purple";
          }
          if (
            (x === "red" && this.color =="yellow") ||
            (x == "yellow" && this.color == "red")
          ) {
            return "orange";
          }
          if (
            (x === "blue" && this.color == "yellow") ||
            (x == "yellow" && this.color == "blue")
          ) {
            return "green";
          }
    } else {
        throw new TypeError('Invalid Color')
    }
  }
  calibrate(x) {
    var y = x.sort();
    for (var i = 0; i < y.length; i++) {
      this.calibrationSequence.push(y[i] * 3);
    }
  }
}
