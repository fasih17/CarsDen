
const mongoose = require('mongoose'); 
 
 mongoose.Promise = global.Promise;
 
 mongoose.connect('mongodb+srv://fasihabdullah:y2rh9zDeCxajtVkx@cluster0.3gbce.mongodb.net/CarsDen?retryWrites=true/CarsDen', {
  dbName: 'CarsDen',
  user: 'fasihabdullah',
  pass: 'lIV1zkAeA4RfaciA',
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
 }, function (err) {
 
  if (err) throw err;
  
  console.log('Successfully connected');
  
  });
 //mongoose.connect('mongodb://localhost:27017/Jobweb', function (err) {
 
  //  if (err) throw err;
  
  //  console.log('Successfully connected');
  
 //});
 var db=mongoose.connection;
 module.exports=db