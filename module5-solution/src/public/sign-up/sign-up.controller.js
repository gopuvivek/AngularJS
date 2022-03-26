(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['MenuService'];
    function SignUpController(MenuService) {
      var $ctrl = this;
      
      $ctrl.validateAndSave = function(){
          MenuService.save({fname:$ctrl.fname, lname:$ctrl.lname, email:$ctrl.email, phone:$ctrl.phone, favitem:$ctrl.favitem})
          .then(function(response){
              $ctrl.success = response;
          });
      }
    }
    
    })();
    