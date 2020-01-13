// var http = require('http');
//
var handleVisitor = function(req, res) {
  res.send('Who Would Win backend. Hi William Mezitis');
}
//
// var server = http.createServer(handleVisitor);
// server.listen(8080);
// console.log("See you in the future");

const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

client.connect();

client.query('SELECT * FROM heroes', (err,rows) => {
  // console.log(rows);
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

app.post("/api/selectHero", function (req, res){
  console.log(req.body.winnerId)
  console.log(req.body.loserId);
  // INSERT INTO heroes_battle SET winner_id = 5, loser_id = 10
  client.query('INSERT INTO heroes_battle(winner_id, loser_id) VALUES($1, $2)', [req.body.winnerId, req.body.loserId], (err, result) => {
    if(err) throw err;
    console.log('Data loaded and processed.')
    res.send('OK');
  })
})

app.get("/api/best", function (req, res){
  client.query("select name from heroes where id = (select winner_id FROM heroes_battle GROUP BY winner_id ORDER BY COUNT(*) DESC limit 1);", function (err, result){
    res.send(result.rows);
    console.log(result.rows);
  });
});

app.get("/api/worst", function (req, res){
  client.query("select name from heroes where id = (select loser_id from heroes_battle group by loser_id order by count(*) DESC limit 1)", function (err, result){
    res.send(result.rows);
    console.log(result.rows);
  });
});

app.get("/api/percent", function (req, res){
  client.query("SELECT SUM(winner_id = $1)/COUNT(*) as winPercentage FROM heroes_battle WHERE winner_id = $2 or loser_id = $3", [req.query.heroId,req.query.heroId,req.query.heroId], function (err, result){
    // console.log(this.sql);
    // console.log(result);
    // res.send(result.rows);
    // console.log(result.rows);
  });
});
app.get("/api/heroes/:id", function (req, res){
  client.query("SELECT * FROM heroes WHERE id = $1", [req.params.id], function (err, result){
    res.send(result.rows)
  });
});

app.listen(port, () => console.log(`${port}: See you in the future`))
