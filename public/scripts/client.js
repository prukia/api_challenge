var app = angular.module('gifApp', []);

app.controller('GifController', function($http){
  console.log('GifController loaded');

  var API = 'http://api.giphy.com/v1'

  var ctrl = this;

  ctrl.gifDisplay = '';
  ctrl.randGif = '';
  ctrl.gifs=[];

    ctrl.randomGif = function(gif){
      console.log("random gif", gif);
      $http.get(API + '/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
          console.log("got a response from the API", response);
          ctrl.randGif = response.data.data.image_url;
          console.log(ctrl.randGif);
        }).catch(function(err){
          console.log("error getting info from API", err);
        });
      }

    ctrl.searchGif = function(gif){
      console.log("search found", gif);
      console.log(ctrl.search);
      $http.get(API + '/gifs/search?q='+ ctrl.search + '&api_key=dc6zaTOxFJmzC').then(function(response){
          console.log("got a response from the API", response);
          // ctrl.gifDisplay = response.data.data[0].images.original.url;
          ctrl.gifs = response.data.data;
          console.log(ctrl.gifs);
        }).catch(function(err){
          console.log("error getting info from API", err);
        });
      }

    //   $http.get(API + '/gif/search', {
    //     params: {
    //       api_key: 'dc6zaTOxFJmzC',
    //       q: ctrl.search
    //     }
    //   })
    // }

  });
