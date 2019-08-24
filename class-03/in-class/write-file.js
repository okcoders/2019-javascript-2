const fs = require('fs')

const data = [
	{name: "Zach"},
	{name: "Bobby"}
]

fs.writeFile('message.json', JSON.stringify(data), (err) => {
	if (err) throw err;
	console.log('The file has been saved!');
});