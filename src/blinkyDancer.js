var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  var self = this;
  setTimeout(function() {
    // Commented out to prevent blinking while testing
    Dancer.step.call(self);
    self.$node.toggle();
  }, this.timeBetweenSteps);
};