const fs = require('fs');
const path=require('path');
const express=require('express');


const app =express();



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);
app.use(express.urlencoded({ extended: true }));

const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users = JSON.parse(userData);

app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));

app.get('/savings', (req, res) => 
{res.render('account', 
{ account: accounts.savings })}
);
app.get('/checking', (req, res) => {
  res.render('account', {
     account: accounts.checking })
    });
app.get('/credit', (req, res) =>{

 res.render('account', 
 { account: accounts.credit })
});
app.get('/transfer', (req, res) => { 
res.render('transfer')
});

app.get('/credit', (req, res) =>{

  res.render('account', 
  { account: accounts.credit })
 });

 /*app.post('/transfer',(req,res)=>{
  accounts["accountsJSON "].balance.parseInt()
  accounts= JSON.parse(file.data.toString('accountsJSON'));
  fs.writeFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
  res.render('transfer',{
    message: "Transfer Completed" 
  });
 });*/

 app.post('/payment',(req,res)=>{
  res.render('payment',{
    account: accounts.credit 
  });
 });

 

app.listen(3000, () => console.log(`PS Project Running on port 3000!`))

