class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.forEach(this.UpdateItemQuality)
    
    return this.items;
  }

  UpdateItemQuality(item) {
    if (isSulfuras(item)) {
      return
    }
    
    if (!(isBrie(item)) && !(isTicket(item))) {
      if (item.quality > 0) {
          item.quality = item.quality - 1;
        
      }
    } else {
      if (item.quality < 50) {
        item.quality ++;
        if (isTicket(item)) {
          if (item.sellIn < 11) {
            increaseQuality(item);
          }
          if (item.sellIn < 6) {
            increaseQuality(item)
          }
        }
      }
    }
    
      item.sellIn -=1 ;
    
    if (item.sellIn < 0) {
      if (!isBrie(item)) {
        if (!isTicket(item)) {
          if (item.quality > 0) {
            
              item.quality -= 1;
            
          }
        } else {
          item.quality = item.quality - item.quality;
        }
      } else {
        increaseQuality(item)
      }
    }
  }
}

module.exports = {
  Item,
  Shop
}
function increaseQuality(item) {
  if (item.quality < 50) {
    item.quality++;
  }
}

function isTicket(item) {
  return item.name === 'Backstage passes to a TAFKAL80ETC concert';
}

function isBrie(item) {
  return item.name === 'Aged Brie';
}
function isSulfuras(item) {
  return item.name === 'Sulfuras, Hand of Ragnaros'
}

