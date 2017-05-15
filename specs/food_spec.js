var assert = require("assert");
var Food = require("../food.js");

describe("Food tests", function(){
  var food1 = new Food("Pancakes", 10);

it("FOOD HAS: name, replenishment value", function(){
  assert.deepEqual("Pancakes", food1.name);
  assert.deepEqual(10, food1.replenishment);
})

//END
});