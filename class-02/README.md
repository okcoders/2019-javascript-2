# Class 2

##  Holy trinity (map, filter, reduce)

- try to implement filter on your own

## Node/command line programs

When we are running command line programs, we often need to display things to users. It is common to fomat the output in fun ways:

```
 OOO  K  K  CCC        d             
O   O K K  C           d             
O   O KK   C    ooo  ddd eee rrr  ss 
O   O K K  C    o o d  d e e r    s  
 OOO  K  K  CCC ooo  ddd ee  r   ss  
                                     
```

Program for generating ascii text: http://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20

- write a program that logs the length of the class-1-data.json file, the number of males, then number of females, and the cumulative age of everyone
- shipping label for each person

## Modules

Programmers like to organize their code. We mainly accomplish this by splitting up code into small, specific files, and then import those files when we need them. In node we can split up and export things by using [modules](https://www.tutorialsteacher.com/nodejs/nodejs-module-exports)

- move your shipping label code to another file, then use it in another file

## 3rd party modules

- [lodash](https://lodash.com/docs), [moment](https://momentjs.com/)
- [npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)
- package.json, src, node_modules, and README.md

## Homework

### Create a homework project

Here is how:

```
pwd (just to check where you are, e.g you should be in a code or projects folder)
mkdir homework
cd homework
npm init --yes
npm install --save lodash
npm install --save moment
```

After doing the above you should have a package.json, package-lock.json, and node_modules folder

### Using 3rd party modules

using the lodash and moment links above try to use the documentation to figure out how to use the modules, at minimum, do the below:

make a new file:

```
touch modules.js
```

Then add

```
const _ = require('lodash')
const moment = require('moment')
```

Problem One:

try to use the lodash find method on the below data to find me (i.e filter for Zach)
```
const data = [{name: "Zach"}, {name: "Bob"}, {name: "Susan"}]
```

Problem Two:

use moment to create a date that represents the present moment (i.e the current timestamp), then subtract 7 days from that date.

### Make width dynamic for the letter maker

Make a new file inside you homework project:

```
touch dynamic-mailer.js
```

Then, add this to that file:

```

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
	console.log("| ", from.name, "                         |")
	console.log("| ", from.street, "                         |")
	console.log("| ", `${from.city}, ${from.state}, ${from.zip}`, "                         |")
	console.log("|                                      |")
	console.log("|          ", to.name, "                         |")
	console.log("|          ", to.street, "                         |")
	console.log("|          ", `${to.city}, ${to.state}, ${to.zip}`, "                         |")
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

console.log(printLetter(to))

```

Update the printLetter function so that the width of the letter is correct, and is dynamic whenever the values in the to object change.

here is a hint:

```
const width = 80
const item = "Zach"
const desiredLeftSpace = 10
function makeLineWithWidth(width, item, desiredLeftSpace) {
	const line = ""
	const itemLength = item.length
	const paddingRight = width - itemLength - desiredLeftSpace
	line += "|"
	for(let i = 0; i < desiredLeftSpace; i++) {
		line += " "
	}
	line += item
	???
}
```
