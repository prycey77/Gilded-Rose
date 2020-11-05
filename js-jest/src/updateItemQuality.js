class UpdateItemQuality{

static updateItemQuality(item) {
  if (isSulfuras(item)) {
    return
  }
  decreaseSellin(item);
  
  if (isBrie(item) || isTicket(item)) {
    if (item.quality < 50) {
      item.quality ++;
      if (isTicket(item)) {
        ticketValue(item);
      }
    }
  } else {
    decreaseQuality(item);
  }
  
  
  pastSellBy(item);
}
}

function decreaseSellin(item) {
  item.sellIn -= 1;
}

function pastSellBy(item) {
if (item.sellIn < 0) {
  if (isBrie(item)) {
    increaseQuality(item);
  } else {
    !isTicket(item) ? decreaseQuality(item) : item.quality = 0;
  }
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

module.exports = UpdateItemQuality