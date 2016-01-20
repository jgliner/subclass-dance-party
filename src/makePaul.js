var Paul = function(top, left, name) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="dancer paul" src="./resources/paul.gif">');
  this.name = name;
};

Paul.prototype = Object.create(Dancer.prototype);
Paul.prototype.constructor = Paul;