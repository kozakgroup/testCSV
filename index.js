const app = require('express')();
const path = require('path')
const tableController = require('./table.controller');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/table', tableController.parseCSV)

app.listen(3005, function() {
  console.log('Example app listening on port 3005!')
})
