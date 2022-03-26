(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('MainItemsListController', MainItemsListController);
    
    
    MainItemsListController.$inject = ['itemsResponse'];
    function MainItemsListController(itemsResponse) {
      var mainList = this;
      mainList.category = itemsResponse.data.category.name;
      mainList.items = itemsResponse.data.menu_items;
    }
    
    })();
    