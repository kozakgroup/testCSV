const path = require('path')

const tableService = require('./table.service')
const sortService = require('./sort.service')

module.exports = {
  parseCSV
}

async function parseCSV(req, res) {
  let json = await tableService.parseCSV(path.join(__dirname, 'data.csv'))
  let sendData = sortService.sortColumns(json, req.query)
  res.json(sendData)
}
