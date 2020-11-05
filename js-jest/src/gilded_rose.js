const UpdateItemQuality = require('./updateItemQuality');

class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(UpdateItemQuality.updateItemQuality)
    
    return this.items;
  }
}
module.exports = Shop;