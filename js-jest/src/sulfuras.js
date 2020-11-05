class Sulfuras {
  constructor(name, sellIn, quality){
      const qualityError = "Quality must be within 0 - 50 inclusive.";

      if (quality > 50 || quality < 0) {
          throw new Error(qualityError)
      }
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}
module.exports = Sulfuras