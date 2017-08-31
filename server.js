var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res) {
  res.render('index', {
    title: 'DBConfig'
  });
})

app.get('/users', function(req, res) {
  knex.raw(`select * from users`).then(function(users) {
    res.send(users.rows);
  })
})

app.get('/users/:id', function(req, res) {
  knex.raw(`select * from users where id=${req.params.id}`).then(function(users) {
    res.send(users.rows);
  })
})

app.post('/users', function(req, res) {
  knex('users')
  .insert({
          username: req.body.username,
          height: req.body.height,
          weight: req.body.weight,
          sex: req.body.sex,
          age: req.body.age,
          workoutfreq: req.body.workoutfreq
        })
  .then(function(){
    knex('users')
      .select()
      .then(function() {
      res.redirect('/users');
    })
  })
})

app.post('/users/:id', (req, res) => {
  knex('users').where('id', req.params.id).update(req.body).then(() =>{
  res.redirect('/users');
})
})

app.delete('/users/:id', (req, res) => {
  knex('users').where('id', req.params.id).del().then(() => {
    res.send('deleted user')
  })
})

app.listen(port, function() {
console.log("listening on port: ", port);
})
