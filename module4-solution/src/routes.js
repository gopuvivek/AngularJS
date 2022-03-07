(function () {
    'use strict';
    
    angular.module('MenuApp')
    .config(RoutesConfig);
    
    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
    
      // Redirect to home page if no other URL matches
      $urlRouterProvider.otherwise('/');
    
      // *** Set up UI states ***
      $stateProvider
    
      // Home page
      .state('home', {
        url: '/',
        templateUrl: 'src/menuapp/templates/home.template.html'
      })
    
      .state('mainList', {
        url: '/main-list',
        templateUrl: 'src/menuapp/templates/main-categorieslist.template.html',
        controller: 'MainCategoriesListController as mainList',
        resolve: {
            categoriesResponse: ['MenuDataService', function (MenuDataService) {
                return MenuDataService.getAllCategories();
          }]
        }
      })
    
      .state('menuItems', {
        url: '/menu-items/{shortName}', //When commented, to allow params, use params:{}
        templateUrl: 'src/menuapp/templates/main-itemslist.template.html',
        controller: 'MainItemsListController as mainList',
        resolve: {
            itemsResponse: ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        },
        params: {
          shortName:null
        }
      });
    
    }
    
    })();
    