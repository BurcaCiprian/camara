angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.addProduct', {
      url: '/addProductPage',
      views: {
        'tab7': {
          templateUrl: 'templates/addProduct.html',
          controller: 'addProductCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.settings', {
      url: '/settingsPage',
      views: {
        'tab10': {
          templateUrl: 'templates/settings.html',
          controller: 'settingsCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('tabsController.caMaRa', {
      url: '/camaraPage',
      views: {
        'tab6': {
          templateUrl: 'templates/caMaRa.html',
          controller: 'caMaRaCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.searchProduct', {
      url: '/searchPage',
      views: {
        'tab8': {
          templateUrl: 'templates/searchProduct.html',
          controller: 'searchProductCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.receipes', {
      url: '/receipesPage',
      views: {
        'tab9': {
          templateUrl: 'templates/receipes.html',
          controller: 'receipesCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/addProductPage');

});