beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

beforeEach(function(){
  jasmine.addMatchers({
    toBeAGoodInvestment: function() {
      return {
        compare: function(actual, expected) {
          var result = {};
          result.pass = actual.isGood();
          result.message = 'Expected investment to be a good investment';
          return result;
        }
      };
    }
  });
});
