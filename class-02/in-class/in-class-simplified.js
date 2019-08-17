const data = require('./class-2-data.json')

function averageAge(col) {
	const sum = col.reduce((p, c) => p + c)
	const totalItems = col.length

	return sum / totalItems
}

function summarise(message, filter) {
	const ages = data
		.filter(e => e.sex === filter)
		.map(e => e.age)

	const averageAgeCalc = averageAge(ages)

	console.log(`Average ${message} age: `, Math.round(averageAgeCalc))
}

console.log("================================")
summarise("male", "M")
summarise("female", "F")
console.log("================================")