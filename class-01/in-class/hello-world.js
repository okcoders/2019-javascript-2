const data = require('./in-class-data.json')

// data.forEach(function (elem) {
// 	console.log(elem.name)
// })

const allNames = data.map(function (elem) {
	return elem.name
})

// console.log(allNames)

const allMales = data.filter(function (elem) {
	return elem.sex === "M"
})

console.log(allMales)

allMales.map(function (elem) {
	return elem.name
})

const allFemales = data.filter(function (elem) {
	return elem.sex === "F"
})

