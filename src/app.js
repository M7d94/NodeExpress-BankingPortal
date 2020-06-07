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

app.get('/savings',(req,res)=>{
  res.render('account',{
   account:'accounts.savings' 
  })
})

app.get('/checking',(req,res)=>{
  res.render('check',{
   account:'accounts.checking' 
  })
})
app.get('/credit',(req,res)=>{
  res.render('credit',{
   account:'accounts.credit' 
  })
})

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Account Summary',
    accounts:'accounts'
   
    
  })
});
app.get('/profile',(req,res)=>{
  res.render('profile',{
   user:users[0]
  })
})

app.listen(3000, () => console.log(`PS Project Running on port 3000!`))

