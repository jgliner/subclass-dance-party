var Carlton = function(top, left, name) {
  Dancer.call(this, top, left);
  this.$node = $('<img class="dancer carlton" src="./resources/carlton.gif">');
  this.name = name;
};

Carlton.prototype = Object.create(Dancer.prototype);
Carlton.prototype.constructor = Carlton;