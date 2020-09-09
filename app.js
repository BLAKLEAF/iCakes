const express = require('express');

const app = express();

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.sendFile(__dirname + "/Home.html");
});

app.get('/Gallery', function(req, res) {
res.sendFile(__dirname + "/Gallery.html");
});

app.get('/Contact', function(req, res) {
  res.sendFile(__dirname + "/Contact.html");
});



app.listen(process.env.PORT || 3000, function() {
  console.log(__dirname);
});
