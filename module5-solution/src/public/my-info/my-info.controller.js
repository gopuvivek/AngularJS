(function () {
    "use strict";
    
    angular.module('public')
    .controller('MyInfoController', MyInfoController);
    
    MyInfoController.$inject = ['ApiPath','MenuService'];
    function MyInfoController(ApiPath, MenuService) {
      var $ctrl = this;
      $ctrl.basePath = ApiPath;
      $ctrl.prefs = MenuService.getPrefs();
      console.log($ctrl.prefs);
      if($ctrl.prefs!==null)
      $ctrl.menuItem = this.prefs.item;
      
    }
    
    })();
    