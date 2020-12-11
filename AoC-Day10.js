var fs = require('fs');

puzzle2();

function puzzle1(){
	const fileName = 'Day10-Input.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\n');

	const sortedData = data.sort((a,b) => a-b).map(d => parseInt(d));
	sortedData.push(sortedData[data.length-1] + 3);
	sortedData.unshift(0);

	let diff_1 = 0;
	let diff_3 = 0;

	for(let i = 0; i < sortedData.length -1; i++){
		console.log(sortedData[i+1] - sortedData[i]);

		sortedData[i+1] - sortedData[i] == 1 ? diff_1++ :
			sortedData[i+1] - sortedData[i] == 3 ? diff_3++ : null;
	}
	console.log(diff_1, '\t',diff_3);
}

function puzzle2(){
	const fileName = 'Day10-Input-Example.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\n');

	const sortedData = data.sort((a,b) => a-b).map(d => parseInt(d));
	sortedData.push(sortedData[data.length-1] + 3);
	sortedData.unshift(0);

	console.log(sortedData);
}
