const fs = require('fs');
const path=require('path');
const express=require('express');

const app =express();
const accountsData=JSON.parse('{ "const":"account"}');
const userData=JSON.parse('{ "const":"users"}');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
fs.readFileSync('/src/json/accounts.json', {encoding:'utf-8'});
fs.readFileSync('/src/json/users.json', {encoding:'utf-8'});
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Index'
   
    
  })
});

app.listen(3000);

