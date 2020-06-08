const fs=require("fs");
const path=require("path");

const accountData = fs.readFileSync(path.join(__dirname, 'json', 'accounts.json'), 'utf8');
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync(path.join(__dirname, 'json', 'users.json'), 'utf8');
const users = JSON.parse(userData);

writeJSON=()=>{
  fs.writeFileSync(path.join(__dirname, 'json','accounts.json'), accountsJSON, 'utf8');
  res.render('transfer', {message: 'Transfer Completed'});
}

module.exports.accounts=accounts;
module.exports.users=users;
module.exports.writeJSON=writeJSON;

