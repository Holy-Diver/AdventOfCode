var fs = require('fs');

const splitRegex = /(?<min>\d+)-(?<max>\d+)\s(?<key>\w):\s(?<password>\w+)/;
part2();

async function part1()
{
	const fileName = 'Day2-Input.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\r\n');

	const ans = data.map(d => d.match(splitRegex).groups)
		.filter(d => d.password.split('').filter(val => val === d.key).length >= d.min)
		.filter(d => d.password.split('').filter(val => val === d.key).length <= d.max);

	console.log(ans.length);
}

function part2()
{
	const fileName = 'Day2-Input.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\r\n');
	
	const ans = data.map(d => d.match(splitRegex).groups)
		.filter(d => d.password.indexOf(d.key,d.min-1) == d.min-1 ^ d.password.indexOf(d.key,d.max-1) == d.max-1)
	
	console.log(ans.length);
}