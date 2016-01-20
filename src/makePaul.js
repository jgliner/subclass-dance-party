var makePaul = function(top, left, name) {
  makeDancer.call(this, top, left);
  this.$node = $('<img class="dancer paul" src="./resources/paul.gif">');
  this.name = name;
};

makePaul.prototype = Object.create(makeDancer.prototype);
makePaul.prototype.constructor = makePaul;