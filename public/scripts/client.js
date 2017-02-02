var app = angular.module('gifApp', []);

app.controller('GifController', function(GifService){
  console.log('GifController loaded');



  var ctrl = this;

  ctrl.gifDisplay = '';
  ctrl.randGif = '';
  ctrl.gifs=[];

    ctrl.randomGif = function(gif){
      console.log("random gif", gif);
      //gifUrl is accessing the response  from the service
    GifService.getRandomGif(gif).then(function (gifUrl){
      ctrl.randGif = gifUrl;
      console.log(ctrl.randGif);
    });
  };

    ctrl.searchGif = function(gif){
      console.log("search found", gif);
      GifService.searchGif(gif).then(function (searchUrl){
        ctrl.gifs = searchUrl;
      });

  };

});
