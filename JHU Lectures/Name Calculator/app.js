(function () {
    'use strict';
    
    angular.module('NameCalcApp', [])
    
    .controller('NameCalcController', function ($scope) {
        $scope.name = "";
        $scope.totalValue = 0;
        
        $scope.displayNumeric = function(){
            var totalNameValue = calcNumericForString($scope.name);
            $scope.totalValue = totalNameValue;
        };

        function calcNumericForString(string){
            var res = 0;
            for(var i=0;i<string.length; i++)
            {
                res += string.charCodeAt(i);
            }
            console.log(res);
            return res;
        }
    
    });
    
    })();