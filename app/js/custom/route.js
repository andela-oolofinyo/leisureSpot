var funspots = angular.module('funspots', ['ngRoute'])
  .config( ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider


    //indexpage route
    .when('/', {
      templateUrl : 'leisureSpot/app/templates/home.html',
      controller : 'homeCtrl'
    })

    //homepage route
    .when('/templates/home', {
      templateUrl : '/templates/home.html',
      controller : 'homeCtrl'
    })

    //hotspots list page route
    .when('/templates/list', {
      templateUrl : '/templates/list.html',
      controller : 'listCtrl'
    })

    //contactPage route
    .when('/templates/form', {
      templateUrl : '/templates/form.html',
      controller : 'formCtrl'
    }).

    //homePage route
    otherwise({
      redirectTo: '/'
    });
  }]);
