// var http = require('http');
//
var handleVisitor = function(req, res) {
  res.send('Who Would Win backend. Hi William Mezitis');
}
//
// var server = http.createServer(handleVisitor);
// server.listen(8080);
// console.log("See you in the future");

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '67.205.151.220',
  user: 'WinData',
  password: 'K!FVzh2@qso8ZALEDkzI67RFb$Woyo',
  database: 'Superheroes'
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Entered the Database. Incoming transmission");
})

connection.query('SELECT * FROM Hero_Name', (err,rows) => {
  if (err) throw err;

  console.log(rows);
})

const express = require('express')
var bodyParser = require("body-parser");
var cors = require('cors')
const app = express()
const port = process.env.PORT || 8080;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', handleVisitor)

app.post("/selectHero", function (req, res){
  console.log(req.body.winnerId)
  console.log(req.body.loserId);
  if (req.body.winnerId && req.body.loserId) {
    // insert these ids into the db
    const battle = {
      winner_id: req.body.winnerId,
      loser_id: req.body.loserId
    };
    // INSERT INTO Hero_Win SET winner_id = 5, loser_id = 10
    connection.query('INSERT INTO Hero_Win SET ?', battle, (err, res) => {
      if(err) throw err;
      console.log('Data loaded and processed.')
    })
  }

  res.send ("Done and done and done")
})

app.get("/best", function (req, res){
  connection.query("SELECT winner_id, COUNT(*) FROM Hero_Win GROUP BY winner_id ORDER BY COUNT(*) DESC limit 1", function (err, result, fields){
    res.send(result);
    console.log(result);
  });
});

app.get("/worst", function (req, res){
  connection.query("select loser_id, count(*) from Hero_Win group by loser_id order by count(*) DESC limit 1", function (err, result, fields){
    res.send(result);
    console.log(result);
  });
});

app.get("/percent", function (req, res){
  connection.query("SELECT SUM(winner_id = ?)/COUNT(*) as winPercentage FROM Hero_Win WHERE winner_id = ? or loser_id = ?", [req.query.heroId,req.query.heroId,req.query.heroId], function (err, result, fields){
    console.log(this.sql);
    res.send(result);
    console.log(result);
  });
});

app.listen(port, () => console.log(`See you in the future`))
