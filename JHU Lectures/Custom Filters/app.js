(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

// Angular appends 'Filter' to the above mentioned name, hence inject that 
// Use only 'loves' when using in html with |. 
// Filters can be chained
// If only using in html no need to inject such as TruthFilter
MsgController.$inject = ['$scope','lovesFilter'];
function MsgController($scope, lovesFilter) {
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";
  $scope.cookieCost = 40;
  $scope.sayMessage = function() {
    var msg = "Yaakov likes to eat healthy snacks at night!";
    return msg;
  }
  $scope.sayLovesMessage = function(){
    var msg  = "Yaakov likes to eat healthy snacks at night!";
    msg = lovesFilter(msg);
    
    return msg;
  }
  $scope.feedYaakov = function(){
    $scope.stateOfBeing = "fed";
  }
};

// Filter factory
function LovesFilter(){
  return function(input){
    input = input || "";
    input = input.replace("likes","loves");
    return input;
  }
}

// Filter factory
function TruthFilter(){
  return function(input, target, replace){
      input = input || "";
      input = input.replace(target, replace);
      console.log(input);
      return input;
  }
}
})();
