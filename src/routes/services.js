const express=require('express')
const router=express.Router();
const { accounts,  writeJSON } = require('../data.js');

const app=express();


router.get('/transfer', (req, res) =>  res.render('transfer'));

router.post('/transfer', (req, res) => {
   accounts[req.body.from].balance = accounts[req.body.form].balance - req.body.amount;
    accounts[req.body.to].balance = parseInt(accounts[req.body.to].balance) +parseInt(req.body.amount,10);
    writeJSON();
  res.render('transfer', {message: 'Transfer Completed'});
});

module.exports.router=router;