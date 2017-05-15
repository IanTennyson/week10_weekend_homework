var Hero = function(name, favouriteFood){
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
  this.quests = [];
  this.currentLocation = [];
  this.isVicious = false;
};


Hero.prototype = {

  talkName: function(){
    return "I am " + this.name + "!";
  },

  damage: function(dmg){
    this.health -= dmg;
  },

  eat: function(food){
    if(food.name === this.favouriteFood){
      var myFavourite = food.replenishment * 1.5
      this.health += myFavourite;
    }else{
    this.health += food.replenishment;
    }
  },

  acceptQuest: function(chosenQuest){
    this.quests.push(chosenQuest);
  },

  questDifficultyHighToLow: function(){
    var sorted = this.quests.sort(function(quest1, quest2){
      return quest2.difficulty - quest1.difficulty
    });
    return sorted;
  },

  questDifficultyLowToHigh: function(){
    var sorted = this.quests.sort(function(quest1, quest2){
      return quest1.difficulty - quest2.difficulty
    });
    return sorted;
  },

  questUrgencyHighToLow: function(){
    var high = [];
    var low = [];
    for(var quest of this.quests){
      if(quest.urgency === "High"){
          high.unshift(quest);
        }
      if(quest.urgency === "Medium"){
          high.push(quest);
        }
      if(quest.urgency === "Low"){
        low.push(quest);
        }
      }
      var sorted = high.concat(low);
      return sorted;
    },

  questRewardHighToLow: function(){
    var sorted = this.quests.sort(function(quest1, quest2){
      return quest2.reward - quest1.reward;
    });
    return sorted;
  },

  questCompleted: function(completedQuest){
    completedQuest.isCompleted = true;
  },

  viewCompletedQuests: function(){
    var finishedQuests = [];
    for (var quest of this.quests){
      if(quest.isCompleted){
        finishedQuests.unshift(quest);
      }
    };
    return finishedQuests;
  },

  viewUnfinishedQuests: function(){
    var unfinishedQuests = [];
    for (var quest of this.quests){
      if(!quest.isCompleted){
        unfinishedQuests.unshift(quest);
      }
    };
    return unfinishedQuests;
  },

  enterNewLocation: function(newLocation){
    this.currentLocation = [];
    this.currentLocation.unshift(newLocation)
    newLocation.addToOccupants(this)
  },

  travel: function(newLocation){
    if(this.currentLocation[0].locationName === newLocation.locationName){
      return "You're already " + newLocation.locationName + " ya dope!";
    };
    if(this.currentLocation[0].isSafe){
      return this.name + " is travelling";
    };
    
    return "Your exit is blocked by "
    
  },

  spawn: function(home){
    this.currentLocation.push(home);
    home.addToOccupants(this)
    if(!home.isLocationSafe()){
      return "It's not safe here!";
    }

  },

  fight: function(){
    var hero = [];
    var villian = [];
    console.log("START THIS.CURRENTLOCATION: ", this.currentLocation[0].listOfOccupants);
    for(var occupant of this.currentLocation){
      if(occupant.isVicious){
        villian.push(occupant);
        console.log("OCCUPANT: ", occupant)
      }else{
        hero.push(occupant);
      }
    }

    console.log("HERO: ", hero[0])
    console.log("VILLIAN: ", villian)
  }


}

module.exports = Hero;