var fs = require('fs');

const parsingRegex = /(contain|,)/g;
const countRegex = /(?<quantity>\d*)?(?<descriptor>[a-z]+\s[a-z]+)/g;
puzzle1();


function puzzle1(){
	const fileName = 'Day7-Input-Example.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\r\n');

	const bagData = data.map(d => d.split(parsingRegex).filter(a => !a.match(parsingRegex)));
	// const matchData = bagData.map(d => console.log(d));
	// const mapData = data.forEach(d => {
	// 	console.log(!d.match(bagRegex));
	// 	// console.log(d);
	// });
	//.filter(a => !a.exec(bagRegex))
	console.log(bagData.flat());
}