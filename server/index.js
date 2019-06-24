var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mongo/index.js');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser());
app.get('/items', function (req, res) {
  db.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});


app.post('/remediations/create', (req, res) => {
  console.log(req.body)
  db.insertRecord(req.body, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json('success');
    }
  })
})
app.listen(3000, function() {
  console.log('listening on port 3000!');
});

