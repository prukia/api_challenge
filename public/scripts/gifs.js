app.controller('GifController', function(GifService){
  console.log('GifController loaded');
  var ctrl = this;

  ctrl.gifDisplay = '';
  ctrl.randGif = '';
  ctrl.gifs=[];
  ctrl.comment = '';
  ctrl.url= '';
   ctrl.favGifs = {};


//don't need to pass a parm in this function because it is looking for randomGif
    ctrl.randomGif = function(){
      // console.log("random gif", gif);
      //gifUrl is accessing the response  from the service
    GifService.getRandomGif().then(function (gifUrl){
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

  ctrl.getGif = function(){
  console.log("search found in DB");
  GifService.getGif().then(function (gifArray){
    ctrl.gifs = gifArray;
  });
  };
//post works on client side only for search btn
  ctrl.postGif = function (fav){
    GifService.postGif(ctrl.comment, fav).then(function(){
      console.log("Your fav gif is posted");
    });
  };




});