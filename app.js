var app = angular.module("fearsLister", ['ui.router']);

fearsLister.config(function($stateProvider. $urlRouteProvider){
  $stateProvider.state('home',{
    url:"",
    templateUrl: "partials/home.html"
  });
  $stateProvider.state('fears',{
    url:"/fears",
    templateUrl: "partials/fears.html",
    controller: 'FearsCtrl'
  });


});