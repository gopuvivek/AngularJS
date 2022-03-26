(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.prefs = null;
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.save = function(params){
    var favitem = params.favitem;
    service.prev = service.prefs;
    service.prefs = null;
    return $http.get(ApiPath + '/menu_items/'+favitem+'.json').then(function (response) {
      service.prefs = params;
      service.prefs.item = response.data;
      return true;
    })
    .catch(function(err){
      console.log(err);
      service.prefs = service.prev;
      return false;
    });
  }

  service.getPrefs = function(){
    return service.prefs;  
  }
}


})();
