var fearsLister = angular.module("fearsLister", ['ui.router']);

fearsLister.config(function($stateProvider, $urlRouterProvider){
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