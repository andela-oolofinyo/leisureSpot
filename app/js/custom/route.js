var funspots = angular.module('funspots', ['ngRoute'])
  .config( ['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
    $locationProvider.html5mode(true);
    $routeProvider


    //indexpage route
    .when('/', {
      templateUrl : '/app/templates/home.html',
      controller : 'homeCtrl'
    })

    //homepage route
    .when('/templates/home', {
      templateUrl : '/app/templates/home.html',
      controller : 'homeCtrl'
    })

    //hotspots list page route
    .when('/templates/list', {
      templateUrl : '/app/templates/list.html',
      controller : 'listCtrl'
    })

    //contactPage route
    .when('/templates/form', {
      templateUrl : '/app/templates/form.html',
      controller : 'formCtrl'
    }).

    //homePage route
    otherwise({
      redirectTo: '/'
    });
  }]);
