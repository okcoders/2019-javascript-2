const fs = require('fs')

fs.readFile('./in-class-data.json', {encoding: 'utf8'}, printFile)

function printFile(err, file) {
	/// in this function body
	console.log(file)
}

// file