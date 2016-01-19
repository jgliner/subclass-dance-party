var makeCage = function() {
  this.$node = $('<img class="cage" src="./resources/cage.png">');
  this.name = name;
  console.log(this)
};

makeCage.prototype.constructor = makeCage;