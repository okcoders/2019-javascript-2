const request  = require('request')
const requestPromise  = require('request-promise-native')

const route1 = 'https://jsonplaceholder.typicode.com/posts'
const route2 = 'https://jsonplaceholder.typicode.com/todos'

// request(route1, function(err, res, data) {
// 	const parsed = JSON.parse(data)
// 	console.log(parsed.length)
// 	console.log(parsed[0])

// 	const user8 = parsed.filter(e => {
// 		return e.userId === 8
// 	})

// 	console.log(user8.length)
// })

// request(route2, function(err, res, data) {
// 	const parsed = JSON.parse(data)
// 	console.log(parsed.length)
// 	console.log(parsed[0])

// 	const notCompleted = parsed.filter(e => {
// 		return e.completed === false
// 	})
// 	console.log(notCompleted.length)
// })

function promiseCallback(data) {
	const parsed = JSON.parse(data)
	console.log(parsed.length)
}

requestPromise(route2).then(promiseCallback).catch(console.log)
