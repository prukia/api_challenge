var app = angular.module('gifApp', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider){
  $routeProvider.when('/', {
  templateUrl: 'views/pages/home.html',
  controller: 'GifController as gif'
}).when('/favorites',{
    templateUrl: 'views/pages/favorites.html',
    controller: 'FavoritesController as fav'
  });
  //injected another angular provider sets location to true
  $locationProvider.html5Mode(true);
});
