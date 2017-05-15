var Quest = function(description, difficulty, urgency, reward){
  this.description = description;
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.isCompleted = false;
};

Quest.prototype = {


}

module.exports = Quest;