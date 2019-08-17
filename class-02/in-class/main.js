const data = require('./class-2-data.json')
const mailer = require('./mailer.js')
const _ = require('lodash')

_.forEach(data, function (e) {
	const to = {
		name: e.name,
		...e.address
	}

	mailer.printLetter(to)
})