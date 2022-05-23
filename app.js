const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');

const app = express();

const items = ['Buy', 'Cook', 'Eat'];
const workItems = [] ;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', function(req, res){
  let day = date.getDate();
  res.render('list', {listTitle: day, newListItem: items});
});

app.post('/', function(req, res){
  if(req.body.list === 'Work'){
    workItems.push(req.body.newItem);
    res.redirect('/work');
  }
  else{
    items.push(req.body.newItem);
    res.redirect('/');
  }
});

app.get('/work', function(req, res){
  res.render('list', {listTitle: 'Work List', newListItem: workItems});
})

app.post('/work', function(req, res){
  let item = req.body.newItem;
  workItem.push(item);

  res.redirect('/');
})

app.listen(3000, function(){
  console.log('SERVER STARTED ON PORT 3000.');
})
