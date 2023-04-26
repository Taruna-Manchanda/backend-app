let express = require('express');
let path = require('path');
let fs = require('fs');
let bodyParser = require('body-parser');
let app = express();

const { Pool } = require("pg");

const pool = new Pool({
  user: "root",
  database: "postgres",
  password: "root",
  port: 5432,
  host: "postgres",
});


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

app.get('/', function (req, res) {
  console.log("Weclome to Home Page of Backend App");
  res.send("Weclome to Home Page of Backend App");
});
  
app.get('/users', function (req, res) {
    console.log("get all users");

    pool.query("select * from myapp.users").then( results => {

      res.json(results.rows);

    }).catch( err=> {

      res.send(err);

    });
    
  });

let port = process.env.PORT || 4000;
app.listen(4000, function () {
  console.log("backend-app listening on port " + port);
});
