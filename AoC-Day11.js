var fs = require('fs');

puzzle1();

function puzzle1(){
	const fileName = 'Day11-Input-Example.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\n');

	const full = data.map(d => d.split('').map(a => a == 'L' ? a = '#' : a = '.'));
}