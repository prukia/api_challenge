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
  //getting fav count
  ctrl.count = gifArray.length;
});
};
//post works on client side only for random search
ctrl.postGif = function (fav){
  GifService.postGif(ctrl.comment, fav).then(function(){
    console.log("Your fav gif is posted");
  });
};
//call function to run above function on page load
ctrl.getGif();

});
