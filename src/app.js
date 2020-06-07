const fs = require('fs');
const path=require('path');
const express=require('express');

const app =express();

app.use(path.join('/',__dirname));
app.use(express.static('public'));
app.get('/', function(req, res) {
  res.render('index');
});

app.listen(3000,'PS Project Running on port 3000!');
