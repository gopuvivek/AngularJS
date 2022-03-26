(function (){
'use strict';
angular.module('myFirstApp', [])
.controller('MyFirstController', function($scope){
    $scope.name = "Vivek";
    $scope.sayHello = function(params) {
         return "Hello World";
    };
});

})();
