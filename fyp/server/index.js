const express =require('express');
const bcrypt = require("bcrypt")
const bodyParser=require('body-parser');
const saltRounds = 10;
const predictrouter =require('./routes/prediction.js')
const db =require('./config/config')
const cors =require('cors');
const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/predict',predictrouter);
app.post('/sign-up', function (req, res) {
    var countValue = req.body;
    console.log("CountValue is", countValue);
    bcrypt.hash(req.body.pass, saltRounds, async (err, hash) => {
    var data = { 
      "email": countValue.email, 
      "pass": hash,
      "phoneno":countValue.phoneno, 
      "gender":countValue.gender, 
      "DOB": countValue.dob
      
  
  
  
  } 
  console.log("HashedPwd: ", hash)
    db.collection('details').insertOne(data,function(err, collection){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
      return res.send({
        success: true,
        message: 'You are now a user'
      });
            
  }); 
  });
  });
  app.post('/sign-in', function (req, res) {
    var countValue = req.body;
    console.log("U are ", countValue.email);
    var data = { 
      "email":countValue.email 
      
      } 
  db.collection('details').findOne({ email: countValue.email }, function(err, collection){
    if(err){
        console.log("Invalid User");
        return res.send({
          success: false,
          message: 'User not exists'
        });
    }else{
      
      if (collection!=null){
        console.log("User found");
        bcrypt.compare(countValue.pass, collection.pass, function(err, resi) {
          console.log(resi)
        if (resi === true){
          console.log("Correct details found");
          console.log(collection.name)
          
  
          return res.send({
            success: true,
            message: 'Correct Details',
            name: collection.name
          });
        }else{
          return res.send({
            success: false,
            message: 'Error: Email and Pass Dont Match'
          });
         
        }
      });
        
      }else{
        console.log("User not found");
        return res.send({
          success: false,
          message: 'Error: Incorrect User, Recheck Your Email'
        });
      }
    }
     
  });
  })
const PORT= process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))