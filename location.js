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