var assert = require("assert");
var Location = require("../location.js");
var Hero = require("../hero.js");

describe("Location tests", function(){


var startingLocation = new Location("Home");
var location1 = new Location("Notice Board");
var location2 = new Location("Shop");

var hero1 = new Hero("Rick", "Pancakes")

it("LOCATION HAS: name, listOfOccupants, isSafe boolean", function(){
  assert.deepEqual("Notice Board", location1.locationName);
  assert.deepEqual([], location1.listOfOccupants);
  assert.deepEqual(0, location1.listOfOccupants.length);
  assert.deepEqual([], location1.objectsInLocation);
  assert.deepEqual(0, location1.objectsInLocation.length);
  assert.deepEqual(true, location1.isSafe);
})

it("LOCATION CAN: be unsafe", function(){
  location1.notSafe();
  assert.deepEqual(false, location1.isSafe)
})

it("LOCATION CAN: add to list of ppl in room", function(){
  location1.addToOccupants(hero1);
  assert.deepEqual(1, location1.listOfOccupants.length);
})

})