var Rat = function(){
  this.name = "Rat";
  this.attack = 5;
  this.health = 20;
  this.isVicious = true;
};

Rat.prototype = {

  bite: function(victim){
    victim.health -= 5
  },

}

module.exports = Rat