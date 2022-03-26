(function () {
    'use strict';
    
    angular.module('DIApp', [])
    .controller('DIController', DIController);
    // '$' is a service
    // '$' filter service has filtering functions used to format the data
    // '$injector' injects corresponding services by parsing
    // Where to inject which services
    // An array can be passed to .controller, with the last function being actual controller
    
    DIController.$inject = ['$scope','$filter', '$injector'];
    function DIController ($scope, $filter, $injector) {
      $scope.name = "Vivek";
      $scope.upper = function(){
          var upCase = $filter('uppercase');
          $scope.name = upCase($scope.name);
      };

      console.log($injector.annotate(DIController));
    }
    
    })();