const example = [4, 7, 6, 2, 1]

function subtractTwo(e) {
	return e - 2
}
const firstAnswerNamed = example.map(subtractTwo)
const firstAnswerAnonymousNormal = example.map(function (e) { return e - 2 })
const firstAnswerAnonymousRocket = example.map(e => e - 2)

const secondAnswerAnonymousRocket = example.filter(e => e % 2 === 0)

const thirdAnswer = example.reduce((p, c) => p + c)