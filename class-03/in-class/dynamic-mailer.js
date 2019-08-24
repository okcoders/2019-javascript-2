const _ = require("lodash")

function printLetter(to) {
	// from and to object
	// {name, street, city, state, zip}

	// ========================================
	// | Zach Mays                            |
	// | 124 NW 20th                          |
	// | OKC, OK 73106                        |
	// |                                      |
	// |						Name                      |
	// |						Address                   |
	// |						City, State, Zip          |
	// ========================================

	console.log("========================================")
	console.log(dynamicLine(2, from.name))
	console.log(dynamicLine(2, from.street))
	console.log(dynamicLine(2, `${from.city}, ${from.state}, ${from.zip}`))
	console.log(dynamicLine(2, ""))
	console.log(dynamicLine(11, to.name))
	console.log(dynamicLine(11, to.street))
	console.log(dynamicLine(11, `${to.city}, ${to.state}, ${to.zip}`))
	console.log("========================================")
}

const from = {
	name: "Zach Mays",
	street: "1234 NW 20th",
	state: "OK",
	city: "OKC",
	zip: "73106"
}

const to = {
	name: "Bobby Rockers",
	street: "1589 NW 4th St",
	state: "OK",
	city: "OKC",
	zip: "73105"
}

const width = 38 
function dynamicLine2(left, content) {
	const right = width - left - content.length
	return `|${_.pad("", left, "=")}${content}${_.pad("", right)}|`
}

function dynamicLine(leftWidth, content) {
	const leftPad = _.pad("", leftWidth)
	const rightWidth = width - leftWidth - content.length
	const rightPad = _.pad("", rightWidth)
	const paddedContent = `${leftPad}${content}${rightPad}`
	const borderCharacter = '|'
	return `${borderCharacter}${paddedContent}${borderCharacter}`
}

function dynamicLine3(left, content) {
	const leftPad = left + content.length
	return "|" + _.padEnd(_.padStart(content, leftPad), width) + "|"
}

printLetter(to)