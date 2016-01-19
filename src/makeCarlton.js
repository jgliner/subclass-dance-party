var makeCarlton = function(top, left, name) {
  this.$node = $('<span class="dancer carlton"></span>');
  makeDancer.call(this, top, left);
  this.name = name;
};

makeCarlton.prototype = Object.create(makeDancer.prototype);
makeCarlton.prototype.constructor = makeCarlton;