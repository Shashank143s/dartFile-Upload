var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/fileUploadDart';
mongoose.connect(mongoDB,{
  server: {
    socketOptions: {
      socketTimeoutMS: 0,
      connectionTimeout: 0
    }
  }
});
var db = mongoose.connection;

// create a schema
var file = mongoose.Schema({
    fileName : String,
    fileSize : String,
    uploadDate : String,
    filepath : String
},{ collection: 'files' });

// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
module.exports =  db.model('file', file);
