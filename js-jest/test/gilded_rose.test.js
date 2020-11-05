const Shop = require("../src/gilded_rose");
const Item = require('../src/item');

describe("Gilded Rose", function() {
  it("Item quality decreases by 1", function() {
    const gildedRose = new Shop([new Item("Item", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(9);
  });
  it("Item quality can not be negative", function() {
    const gildedRose = new Shop([new Item("Item", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0); 
  });
  it("Item quality decreases by 2 after sellIn < 0", function() {
    const gildedRose = new Shop([new Item("Item", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(8);
  });
  it("Aged Brie quality increases by 1", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(11);
  });
  it("Aged Brie quality can not exceed 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
  });
  it("Sulfuras quality does not change", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(80);
  });
  it("Backstage pass increases in value by 1 when sellIn is over 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 30)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(31);
  });
  it("Backstage pass increases in value by 2 when sellIn =< 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 30)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(32);
  });
  it("Backstage pass increases in value by 3 when sellIn is between 5 and 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(33);
  });
  it("Backstage pass quality is 0 after sellIn date", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 30)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(0);
  });
  it("Backstage pass quality can not exceed 50", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50)]);
    const items = gildedRose.updateQuality();
    expect(gildedRose.items[0].quality).toBe(50);
  });
  

});
