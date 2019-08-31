const _ = require('lodash')

const example1 = [1, 2, 3, 4, 5, 6, 7, 8]
const example2 = ["zach", "bob", "tim"]
const example3 = [
	{name: "zach", age: 4},
	{name: "bob", age: 10}
]

const evens = e => e % 2 === 0
const odds = e => e % 2 !== 0

const zachFilter = e => e === "zach"

const ageFilter = e => e.age > 5

const answer1 = [2, 4, 6, 8]
const answer2 = [1, 3, 5, 7]
const answer3 = ["zach"]
const answer4 = [{name: "bob", age: 10}]

function filter(arr, callback) {
	const newArray = []
	for(let i = 0; i < arr.length; i++) {
		const shouldKeep = callback(arr[i])
		if (shouldKeep) {
			newArray.push(arr[i])
		}
	}
	return newArray
}

console.log(filter(example1, evens))
console.log(_.isEqual(filter(example1, evens), answer1))
console.log(_.isEqual(filter(example1, odds), answer2))
console.log(_.isEqual(filter(example2, zachFilter), answer3))
console.log(_.isEqual(filter(example3, ageFilter), answer4))