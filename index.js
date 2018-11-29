const express = require('express');
const app = express();
const port = 3000;

const users = require('./data.json');

app.get('/users', (req, res) => {
  res.json({users:users});
})


app.get('/users/:id', (req, res) => { 
 var result = users.filter(obj => {
    return obj.id === Number(req.params.id)
 })
 res.json({user:result});
});


app.listen(port, () => console.log(`users app listening on port ${port}!`));
