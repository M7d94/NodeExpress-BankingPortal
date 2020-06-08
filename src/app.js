const fs = require('fs');
const path=require('path');
const express=require('express');
const { accounts, users, writeJSON } = require('./data.js');
const accountRoutes=require('./routes/accounts.js');
const servicesRoutes=require('./routes/services.js');
const app =express();


//app.use('/account','accountRoutes');
//app.use('/services','servicesRoutes');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/css', express.static(path.join(__dirname, 'public/css')));
app.use('/js', express.static(path.join(__dirname, 'public/js')));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.render('index', { title: 'Account Summary', accounts: accounts }));



app.get('/payment', (req, res) => res.render('payment', {account: accounts.credit}));
app.post('/payment', (req, res) => {
    accounts.credit.balance -= req.body.amount;
    accounts.credit.available += parseInt(req.body.amount);
    let accountsJSON = JSON.stringify(accounts, null, 4)
    const writeJSON=writeJSON();
});

app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));
app.listen(3000, () => console.log(`PS Project Running on port 3000!`))

