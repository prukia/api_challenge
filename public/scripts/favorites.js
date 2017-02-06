app.controller('FavoritesController', function(GifService){
    console.log('FavoritesController loaded');

    var ctrl = this;
    ctrl.comment = '';
    ctrl.url= '';
    ctrl.gifs=[];
    ctrl.favGifs = {};
//
ctrl.getGif = function(){
console.log("search found in DB");
GifService.getGif().then(function (gifArray){
  ctrl.gifs = gifArray;
});
};
//post works on client side only for random search
ctrl.postGif = function (fav){
  GifService.postGif(ctrl.comment, fav).then(function(){
    console.log("Your fav gif is posted");
  });
};
ctrl.getGif();

});
