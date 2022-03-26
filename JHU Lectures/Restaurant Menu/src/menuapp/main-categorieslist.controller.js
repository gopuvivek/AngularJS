(function () {
    'use strict';
    
    angular.module('MenuApp')
    .controller('MainCategoriesListController', MainCategoriesListController);
    
    
    MainCategoriesListController.$inject = ['categoriesResponse'];
    function MainCategoriesListController(categoriesResponse) {
      var mainList = this;
      mainList.categories = categoriesResponse.data;
    }
    
    })();
    