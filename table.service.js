var csv = require('parse-csv')
const fs = require('fs')

const readFile = promisify(fs.readFile)

module.exports = {
  parseCSV
}

const opts = {
  outputDataType: 'json',
  columnDelimiter: ',',
  rowDelimiter: '\n',
  headers: { included: true }
}

async function parseCSV (path) {
  const file = await readFile(path)
  const replacedFile = file.toString().replace(/    /gi, ',')
  const data = csv.toJSON(replacedFile, opts)
  return data
}

function promisify(func) {
  return function() {
    return new Promise((resolve, reject) => {
      func(...arguments, (err, data) => {
        if (err) return reject(err)
        resolve(data)
      })
    })
  }
}

