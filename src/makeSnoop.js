var Snoop = function(top, left, name) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="dancer snoop" src="./resources/snoop.gif">');
  this.name = name;
};

Snoop.prototype = Object.create(Dancer.prototype);
Snoop.prototype.constructor = Snoop;