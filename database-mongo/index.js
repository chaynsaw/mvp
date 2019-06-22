var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  // purpose: String,
  description: String,
  importance: Number,
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

var insertRecord = function(obj, callback) {
  Item.create(obj, function(err, data) {
    if (err) {
      callback(err, data)
    } else {
      callback(null, data);
    }
  })
}


module.exports.insertRecord = insertRecord
module.exports.selectAll = selectAll