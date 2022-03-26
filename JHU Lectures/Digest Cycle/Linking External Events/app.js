(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope', '$timeout'];
function CounterController($scope, $timeout) {
  $scope.counter = 0;

  $scope.upCounter = function () {
    // setting time out
    // setTimeout(function(){
    //   $scope.counter++;
    //   console.log("Counter incremented!");
    //   // Manually firing digest cycle
    //   $scope.$digest();
    // }, 2000);
    // The above setTimeout func is out of angular context
    // Hence is not watched

    // Exceptions thrown in the above function are not shown to AngularJS
    // To make it visible $apply is used
    // when $apply() is used $digest is automatically called
    // setTimeout(function(){
    //   $scope.$apply(function(){
    //     $scope.counter++;
    //     console.log("Counter incremented!");
    //   });
    // }, 2000);

    // Always try to use native angular native functions
    $timeout(function(){
      $scope.counter++;
      console.log("Counter incremented!");
    }, 2000);
  };
}

})();
