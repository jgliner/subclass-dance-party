var makeCage = function(top, left, name) {
  makeDancer.call(this, top, left);
  this.$node = $('<img class="dancer cage" src="./resources/snoop.gif">');
  this.name = name;
};

makeSnoop.prototype = Object.create(makeDancer.prototype);
makeSnoop.prototype.constructor = makeCage;