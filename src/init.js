$(document).ready(function() {
  window.dancers = [];
  var audioOn = false;
  $('button').on('click', function(){
    if (!audioOn){
      var sound = new Audio('./resources/ts.mp3');
      sound.play();
      audioOn = true;
    }  
  });

    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    $('.lineupButton').on('click', function() {
      var w = $('.barrier').width();
      var distr = -($('.barrier').width()/2);
      if (dancers.length < 2) {
        dancers[0].top = $('.barrier').height()/2;
        dancers[0].left = w/2;
        dancers[0].setPosition();
      }
      else {
        var accumulatedPosition = 0;
        window.dancers.forEach(function(dancer) {
          accumulatedPosition += w / (window.dancers.length + 1);
          dancer.top = $('.barrier').height()/window.dancers.length;
          dancer.left = accumulatedPosition;
          dancer.setPosition();
          distr += w;
        });
      }
    });

    $('.snoopButton').click(function(){
      var snoop = new Snoop(
      $(".barrier").height() * Math.random(),
      $(".barrier").width() * Math.random(),
      'snoop');
      snoop.init();
      window.dancers.push(snoop);
      $('.barrier').append(snoop.$node);
    });

    $('.carltonButton').click(function(){
      var carlton = new Carlton(
      $(".barrier").height() * Math.random(),
      $(".barrier").width() * Math.random(),
      'snoop');
      carlton.init();
      window.dancers.push(carlton);
      $('.barrier').append(carlton.$node);
    });

    $('.paulButton').click(function(){
      var paul = new Paul(
      $(".barrier").height() * Math.random(),
      $(".barrier").width() * Math.random(),
      'snoop');
      paul.init();
      window.dancers.push(paul);
      $('.barrier').append(paul.$node);
    });

    // setTimeout(function(){
    //   var cage = new makeCage();
    //   var numDancers = window.dancers.length;
    //   // for(var i = 0; i < numDancers; i++){
    //   //   window.dancers.splice(0, 1);
    //   // }
    //   $('.topbar').append(cage.$node);
    // }, 5000);

  $('.barrier').on('mouseover', '.dancer', function() {
    var pos = $(this).position().top;
    var self = this;
    $(this).css({'top': `${(pos)-160}px`, 'transition': 'all 0.1s'});
    setTimeout(function() {
      console.log("setTimeout", pos);
      $(self).css({'top': `${(pos)+80}px`, 'transition': 'all 0.5s'});
    }, 100);
  });
  $('.barrier').on('mouseleave', '.dancer', function() {
   $(this).css('transition', 'all 4s');
  });
});

