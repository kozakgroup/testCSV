module.exports = {
  sortColumns
}

function sortColumns(data, opts) {
  const { sortcolumn, sortdir } = opts
  return sortcolumn && sortdir
    ? data.sort(directions[sortdir](sortcolumn))
    : data
}

const directions = {
  ASC: column => (a, b) => stripNumbers(a[column]) - stripNumbers(b[column]),
  DESC: column => (a, b) => stripNumbers(b[column]) - stripNumbers(a[column])
}

const stripNumbers = s => s.replace(/\D/g, '')
