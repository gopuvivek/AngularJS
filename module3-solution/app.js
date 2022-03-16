(function(){
    angular.module('NarrowItDownApp',[])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('APIBasePath','https://davids-restaurant.herokuapp.com/');

    NarrowItDownController.$inject = ['MenuSearchService','$rootScope'];

    function NarrowItDownController(MenuSearchService, $rootScope){
        var ndc = this;
        ndc.searchItem = "";
        
        ndc.searchMenu = function(searchItem){
            ndc.emptyMessage = false;
            $rootScope.$broadcast('processing', { on: true });
            MenuSearchService.getMenu(searchItem)
            .then(function(data){
                ndc.items = data;
                ndc.emptyMessage = ndc.items.length==0 || ndc.searchItem.length==0;
            });
        }
        ndc.removeItem = function(index){
          MenuSearchService.removeItem(index);
        }
        ndc.showSpinner = false;
        var cancelListener = $rootScope.$on('processing', function (event, data) {
        
            if (data.on) {
              ndc.showSpinner = true;
            }
            else {
              ndc.showSpinner = false;
            }
          });
        
          ndc.$onDestroy = function () {
            cancelListener();
          };
     };

     MenuSearchService.$inject = ['$http','APIBasePath','$rootScope'];
     function MenuSearchService($http, APIBasePath, $rootScope){
         var service = this;
         service.result = [];
         
         service.removeItem = function(index){
           service.result.splice(index,1);
         }
         service.getMenu = function(searchItem){
             return $http({
                method: "GET",
                url: APIBasePath+'/menu_items.json',
             })
             .then(function(response){
                var items = response.data;
                if(searchItem.length===0)
                  return [];
                for (var i = 0; i < items.menu_items.length; i++) {
                    if (items.menu_items[i].description.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1) {
                        service.result.push(items.menu_items[i]);
                    }
                  }
                return service.result;
             })
             .finally(function(){
                $rootScope.$broadcast('processing', { on: false });
             });
         }
     }
})();