var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = this.step;
  this.oldStep();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  var self = this;
  setTimeout(function() {
    // Commented out to prevent blinking while testing
    // self.$node.toggle();
    self.step();
  }, this.timeBetweenSteps);
};