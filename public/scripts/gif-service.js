app.service('GifService', function ($http){
var API = 'http://api.giphy.com/v1';

this.getRandomGif = function (){
//return the promise to the called
return $http.get(API + '/gifs/random?api_key=dc6zaTOxFJmzC').then(function(response){
      console.log("got a response from the API", response);
      //ctrl.randGif does not exist anymore instead use return
      return response.data.data.image_url;

    }).catch(function(err){
      console.log("error getting info from API", err);
    });
  };

this.searchGif = function (search){
return $http.get(API + '/gifs/search', {params: {
  q: search,
  api_key: 'dc6zaTOxFJmzC',
  limit: 5
}}).then(function(response){
      console.log("got a response from the API", response);
      //ctrl.gifs does not exist anymore instead return
      return response.data.data;

    }).catch(function(err){
      console.log("error getting info from API", err);
    })
  };

this.getGif = function (){
return  $http({
    method: 'GET',
    url:'/gif'
  }).then(function (response){
    console.log("got a response from the DB", response);
    return response.data;
  }).catch(function(err){
    console.log("error getting info from DB", err);
  });
};

this.postGif = function (comment, url){
console.log(comment);
console.log(url);
  return $http({
    method: 'POST',
    url:'/gif',
    data: {
      comments: comment,
      image_url: url
    }
  }).then(function (response){
    console.log('post is successful', response);
    // console.log(data);
    // return response.data.data.image_url;
  }).catch(function (err){
    console.log("error getting info from DB", err);
  })

};



});
