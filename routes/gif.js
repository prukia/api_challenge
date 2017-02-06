var router = require('express').Router();

//link database
var pg = require("pg");
var config = { database: "gif_app" };
var pool = new pg.Pool(config);

// router.get('/', function(req, res) {
//   res.send('gifs are cool');

  router.get("/", function(req, res) {

  pool.connect(function(err, client, done) {
    if (err) {
      console.log("Error connecting to DB", err);
      res.sendStatus(500);
      done();
    } else {

      client.query("SELECT * FROM favorites;", function(err, result) {
        done();
        if (err) {
          console.log("Error querying DB", err);
          res.sendStatus(500);
        } else {
          console.log("Got info from DB", result.rows);
          res.send(result.rows);
        }
      });
    }
  });
});
router.post('/', function(req, res){
  pool.connect(function(err, client, done){
    console.log(req.body);
    if (err){
      console.log('Error connecting to DB', err);
      res.sendStatus(500);
      done();
    } else {

      client.query('INSERT INTO favorites (comments, image_url) VALUES ($1, $2) RETURNING *;',
      [req.body.comment, req.body.url],
      function(err, result){
        //waiting for database to get information back
        done();
        if(err) {
          console.log('Error querying DB', err);
          res.sendStatus(500);
        }else{
          console.log('Got info from DB POST', result.rows);
          res.send(result.rows);
        }

      })

    }
  });
});

module.exports = router;
