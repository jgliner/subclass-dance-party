var makeCarlton = function(top, left, name) {
  makeDancer.call(this, top, left);
  this.$node = $('<img class="dancer carlton" src="./resources/carlton.gif">');
  this.name = name;
};

makeCarlton.prototype = Object.create(makeDancer.prototype);
makeCarlton.prototype.constructor = makeCarlton;