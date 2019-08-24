const fs = require('fs')

const file = fs.readFileSync('./in-class-data.json', {encoding: 'utf8'})

printFile(file)

function printFile(file) {
	console.log(file)
}

console.log("hello async")