var fs = require('fs');

const parsingRegex = /(contain|,)/g;
const countRegex = /(?<quantity>\d*)?(?<descriptor>[a-z]+\s[a-z]+)/g;
puzzle1();


function puzzle1(){
	const fileName = 'Day7-Input-Example.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\n');

	// console.log(data);
	const bagData = data.map(d => d.split(parsingRegex).filter(a => !a.match(parsingRegex))).flat();
	console.log(bagData)
	const test = data.map(d => d.split(parsingRegex).map(a => console.log(a)));
	console.log(test);
}