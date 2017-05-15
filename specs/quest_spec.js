var assert = require("assert");
var Quest = require("../quest.js");

describe("Quest tests", function(){
  var quest1 = new Quest("The shop is infested with rats, Clear it out!", 1, "Low", 50);
  

it("QUEST HAS: difficulty, urgency, reward, isCompleted?", function(){

  assert.deepEqual("The shop is infested with rats, Clear it out!", quest1.description);
  assert.deepEqual(1, quest1.difficulty);
  assert.deepEqual("Low", quest1.urgency);
  assert.deepEqual(50, quest1.reward);
  assert.deepEqual(false, quest1.isCompleted);
});


//END
});