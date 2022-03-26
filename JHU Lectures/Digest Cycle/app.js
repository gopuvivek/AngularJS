(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);
// '$$' double-dollar sign is something that is internal to angular JS
CounterController.$inject = ['$scope'];
function CounterController($scope) {
  $scope.onceCounter = 0;
  $scope.counter = 0;

  $scope.showNumberOfWatchers = function () {
    console.log("# of Watchers",$scope.$$watchersCount);
  };

  $scope.countOnce = function(){
    $scope.onceCounter = 1;
  };

  $scope.upCounter = function(){
    $scope.counter++;
  };

  //Manual setting up of watcher for onceCounter
  $scope.$watch('onceCounter', function(newValue, oldValue){
    console.log("onceCounter Old Value: ",oldValue);
    console.log("onceCounter New Value: ",newValue);
  });

  //Manual setting up of watcher for counter
  $scope.$watch('counter', function(newValue, oldValue){
    console.log("counter Old Value: ",oldValue);
    console.log("counter New Value: ",newValue);
  });

  $scope.$watch(function(){
    // To check when digest loop is fired
    // Digest loop will run twice, once to verify the change and the other to check if any else has changed
    // This 'twice' run is called 'Dirty checking'
    // $scope.$watch - don't use in a controller
    // {{ }}
    // <input ng-model="someProp">
    console.log("Digest Loop Fired!");
  })
}

})();
