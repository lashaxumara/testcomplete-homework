class RandomNumberGenerator {
  constructor() {
    var min = Math.pow(10, 9); // Minimum value with 9 digits
    var max = Math.pow(10, 10) - 1; // Maximum value with 10 digits
    this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }
}


module.exports.RandomNumberGenerator = RandomNumberGenerator;
