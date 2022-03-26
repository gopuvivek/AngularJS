(function (){
    'use strict';

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
        $scope.items = "";
        $scope.result = "";
        $scope.inputstyle = {}
        $scope.textstyle = {};
        $scope.CheckLunch = function(){
            var list = $scope.items.split(',');
            var cnt = 0;
            list.forEach(element => {
                cnt+=element.length!=0?1:0;
            });
            if(cnt==0){
                $scope.result = "Please enter data first";
                $scope.textstyle.color = "red";
                $scope.inputstyle.border = "3px solid red";
            }
            else if(cnt>3)
                $scope.result = "Too much!";
            else
                $scope.result = "Enjoy!";
            if(cnt!=0)
            {
                $scope.inputstyle.border = "3px solid green";
                $scope.textstyle.color = "green";
            }
        }
    }
})();
