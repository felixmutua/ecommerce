var express =require('express');

var morgan =require('morgan');



var app =express();

//Middleware
app.use(morgan('dev'));

app.get('/', function(req,res){
  var name = "FelixMutua";
  res.json("My name is  " + name);
});




app.listen(3000, function (err) {
  if (err) throw err;
  console.log("Server is running");

});
