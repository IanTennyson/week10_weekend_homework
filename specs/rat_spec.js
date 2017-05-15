var assert = require("assert");
var Rat = require("../rat.js");

describe("Rat tests", function(){

var rat1 = new Rat();

it("RAT HAS: attack strength and health", function(){
  assert.deepEqual(5, rat1.attack)
  assert.deepEqual(20, rat1.health)
  assert.deepEqual(true, rat1.isVicious)
})

});