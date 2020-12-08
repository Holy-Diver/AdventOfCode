var fs = require('fs');

// puzzle1();
// console.log(puzzle2(1,1))
// console.log(puzzle2(5,1))
// console.log(puzzle2(7,1))
console.log(puzzle2(1,2))
// console.log(puzzle2(3,1))
// console.log(puzzle2(3,1)*puzzle2(1,1)*puzzle2(5,1)*puzzle2(7,1)*puzzle2(1*2));

async function puzzle1(){
	const fileName = 'Day3-Input.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\r\n');

	let col = 0;
	const run = 1;
	const columns = 30;

	const ans = data.reduce((trees,row) => {
		row.charAt(col) == '#' ? trees++ : null; 
		console.log(trees,col, row.charAt(col),'\t', row); 
		col <= columns - run ? col += run : col = col - columns + run - 1;	
		return trees;
	},0);

	console.log(ans);
}

function puzzle2(x,y){
	const fileName = 'Day3-Input.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\r\n');

	let col = 0;
	let row = 0;
	const run = x;
	const rise = y;
	const columns = 30;

	const ans = data.reduce((trees,val) => {
		console.log(trees,col, row, val.charAt(col), '		', val); 
		if(row == rise){
			val.charAt(col) == '#' ? trees++ : null; 
			col <= columns - run ? col += run : col = col - columns + run - 1;
			row = 1;
			return trees;
		} 
		row++;
		return trees;
	},0);

	return	ans;
}