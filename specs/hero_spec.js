var assert = require("assert");
var Hero = require("../hero.js");
var Food = require("../food.js");
var Quest = require("../quest.js");
var Location = require("../location.js")
var Rat = require("../rat.js")

describe("Hero tests", function(){

var startingLocation;
var location1;
  beforeEach(function(){
    startingLocation = new Location("Home");
    location1 = new Location("Notice Board");
  });

var food1;
var food2;
  beforeEach(function(){
    food1 = new Food("Pancakes", 10);
    food2 = new Food("Eggs", 20);
  });

var quest1;
var quest2;
var quest3;
var quest4;
var quest5;
    beforeEach(function(){
      quest1 = new Quest("The shop is infested with rats, Clear it out!",1, "Low", 200);
      quest2 = new Quest("quest description", 2, "Medium", 400);
      quest3 = new Quest("quest description", 2, "High", 400);
      quest4 = new Quest("quest description", 2, "Medium", 400);
      quest5 = new Quest("quest description", 2, "High", 400);
    });

var hero1;
  beforeEach(function(){
  hero1 = new Hero("Rick", "Pancakes");
  hero1.enterNewLocation(startingLocation);
  });

  var rat1;
    beforeEach(function(){
    rat1 = new Rat();
    startingLocation.addToOccupants(rat1)
    });

it("HERO HAS: name, favouriteFood, health, quests", function(){
  assert.deepEqual("Rick", hero1.name);
  assert.deepEqual("Pancakes", hero1.favouriteFood);
  assert.deepEqual(100, hero1.health);
  assert.deepEqual([], hero1.quests);
  assert.deepEqual(0, hero1.quests.length);
  assert.deepEqual(1, hero1.currentLocation.length);
  assert.deepEqual("Home", hero1.currentLocation[0].locationName);
});

it("HERO CAN: tell you his name", function(){
  assert.deepEqual("I am Rick!", hero1.talkName());
});

it("HERO CAN: take damage", function(){
  hero1.damage(20);
  assert.deepEqual(80, hero1.health);
});

it("HERO CAN: recover health", function(){
  hero1.damage(20);
  hero1.eat(food2);
  assert.deepEqual(100, hero1.health);
});

it("HERO CAN: recover more health if eating favouriteFood", function(){
  hero1.damage(20);
  hero1.eat(food1);
  assert.deepEqual(95, hero1.health);
});

it("HERO CAN: acceptQuest", function(){
  hero1.acceptQuest(quest1);
  assert.deepEqual(1, hero1.quests.length)
});

it("HERO CAN: sort their quests by difficulty. High to Low", function(){
  hero1.acceptQuest(quest1);
  hero1.acceptQuest(quest2);
  hero1.questDifficultyHighToLow()
  assert.deepEqual([ { description: 'quest description', difficulty: 2, urgency: 'Medium', reward: 400, isCompleted: false }, { description: "The shop is infested with rats, Clear it out!", difficulty: 1, urgency: 'Low', reward: 200, isCompleted: false } ], hero1.quests)
});

it("HERO CAN: sort their quests by difficulty. Low to High", function(){
  hero1.acceptQuest(quest1);
  hero1.acceptQuest(quest2);
  hero1.questDifficultyLowToHigh();
  assert.deepEqual([ { description: "The shop is infested with rats, Clear it out!", difficulty: 1, urgency: 'Low', reward: 200, isCompleted: false }, { description: 'quest description', difficulty: 2, urgency: 'Medium', reward: 400, isCompleted: false }], hero1.quests)
});

it("HERO CAN: sort their quests by urgency. High to Low", function(){
  hero1.acceptQuest(quest1);
  hero1.acceptQuest(quest2);
  assert.deepEqual([ { description: 'quest description', difficulty: 2, urgency: 'Medium', reward: 400, isCompleted: false }, { description: "The shop is infested with rats, Clear it out!", difficulty: 1, urgency: 'Low', reward: 200, isCompleted: false } ], hero1.questUrgencyHighToLow())
});

it("HERO CAN: sort their quests by reward. High to Low", function(){
  hero1.acceptQuest(quest1);
  hero1.acceptQuest(quest2);
  assert.deepEqual([ { description: 'quest description', difficulty: 2, urgency: 'Medium', reward: 400, isCompleted: false }, { description: "The shop is infested with rats, Clear it out!", difficulty: 1, urgency: 'Low', reward: 200, isCompleted: false } ], hero1.questRewardHighToLow())
});

it("HERO CAN: complete quests", function(){
    hero1.questCompleted(quest1)
    assert.deepEqual(true, quest1.isCompleted);
    assert.deepEqual(false, quest2.isCompleted);
  });

it("HERO CAN: view completed quests", function(){
  hero1.acceptQuest(quest1);
  hero1.acceptQuest(quest2);
  hero1.acceptQuest(quest3);
  hero1.questCompleted(quest1);
  hero1.questCompleted(quest2);
  assert.deepEqual(2, hero1.viewCompletedQuests().length)
});

it("HERO CAN: view unfinished quests", function(){
  hero1.acceptQuest(quest1);
  hero1.acceptQuest(quest2);
  hero1.acceptQuest(quest3);
  hero1.questCompleted(quest3);
  assert.deepEqual(2, hero1.viewUnfinishedQuests().length)
});

it("HERO CAN: be an occupant in room", function(){
  startingLocation.addToOccupants(rat1)
  assert.deepEqual(3, hero1.currentLocation[0].listOfOccupants.length)
});



xit("HERO CAN: start fight", function(){
assert.deepEqual(2, startingLocation.listOfOccupants.length)

assert.deepEqual(80, hero1.health)
})

xit("HERO CAN: kill rat", function(){

})

it("HERO CAN'T: be in more than one place at a time", function(){
  hero1.enterNewLocation(startingLocation);
  hero1.enterNewLocation(location1);
  assert.deepEqual(1, hero1.currentLocation.length)
});

it("HERO CAN'T: travel to his current location", function(){
  assert.deepEqual("You're already Home ya dope!", hero1.travel(startingLocation));
  assert.deepEqual("Rick is travelling", hero1.travel(location1));
  hero1.currentLocation[0].notSafe();
  assert.deepEqual("Your exit is blocked by ", hero1.travel(location1));
});



it("HERO CAN: determine if a location is safe", function(){
  startingLocation.addToOccupants(rat1);
  assert.deepEqual("It's not safe here!", hero1.spawn(startingLocation))
})




//END
});