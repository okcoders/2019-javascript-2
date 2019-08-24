const _ = require("lodash")
const moment = require("moment")
const data = require("./in-class-data.json")

const zachObject = _.find(data, (elem) => elem.name === "Zach Mays")
const greaterThanObject = _.find(data, (elem) => elem.age > 20)

const now = moment()
console.log(now.format())

const sevenDaysAgo = moment().subtract(7, 'days')
console.log(now.format())
console.log(sevenDaysAgo.format())