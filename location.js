var Location = function(locationName){
  this.locationName = locationName;
  this.listOfOccupants = [];
  this.objectsInLocation = [];
  this.isSafe = true;
};

Location.prototype = {

  notSafe: function(){
    this.isSafe = false;
  },

  addToOccupants: function(newOccupant){
    this.listOfOccupants.push(newOccupant);
  },

  startFight: function(){
    for(i = 0; i < listOfOccupants.length; i++ ){
      console.log("WHAT IS I: ", i)
      // if(!i.isVicious && occupant[i + 1])
    }
  },

  isOccupantVicious: function(){
    var enemyArray = [];
    for(var occupant of this.listOfOccupants){
      if (occupant.isVicious){
        enemyArray.push(occupant)
      }
    }
    return enemyArray;
  },

  isLocationSafe: function(){
    for(var occupant of this.listOfOccupants){
      if(occupant.isVicious){
        return false;
      }
    }
  },

}

module.exports = Location