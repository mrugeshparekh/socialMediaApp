var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/social', function() {
    console.log('Mongo Connected');
});

module.exports = mongoose;