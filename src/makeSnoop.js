var makeSnoop = function(top, left, name) {
  this.$node = $('<span class="dancer snoop"></span>');
  makeDancer.call(this, top, left);
  this.name = name;
};

makeSnoop.prototype = Object.create(makeDancer.prototype);
makeSnoop.prototype.constructor = makeSnoop;