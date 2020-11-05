const MAX = 50;

class UpdateItemQuality {

  static updateItemQuality(item) {
    if (isSulfuras(item)) {
      return
    }
    decreaseSellin(item);


    if (isTicket(item)) {
      updateTicket(item)
      return
    }
  
    if (isBrie(item)) {
      updateBrie(item)
      return
    }
    pastSellBy(item);
    decreaseQuality(item);
  }
}
function updateBrie(item) {
  if (item.quality < MAX) {
    item.quality++;
    return
  }
  item.quality = MAX
  return
}

function updateTicket(item) {
      if (item.sellIn < 0) {
        item.quality = 0
        return
      }
      if (item.quality < MAX) {
        item.quality++;
        ticketValue(item);
      } else {
        item.quality = MAX
      }

    }

function decreaseSellin(item) {
      item.sellIn -= 1;
    }

function pastSellBy(item) {
      if (item.sellIn < 0) {
        if (isBrie(item)) {
          increaseQuality(item)
          return
        }
        if (isTicket(item)) {
          item.quality = 0
          return
        }
        else
          decreaseQuality(item)
      }
    }



function ticketValue(item) {
if (item.sellIn < 10) {
  increaseQuality(item);
}
if (item.sellIn < 5) {
  increaseQuality(item);
}
}

function decreaseQuality(item) {
if (item.quality > 0) {
  item.quality = item.quality - 1;

}
}

function increaseQuality(item) {
if (item.quality < MAX) {
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

module.exports = UpdateItemQuality