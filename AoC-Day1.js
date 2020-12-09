var fs = require('fs');

puzzle();

function puzzle(){
	const fileName = 'Day1-Input.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\n');

	let val = 0;
	let val1 = 0;
	let guess = 0;

	const tempArr = expenseReport.filter(a => a < 1500); 

	for(let i = 0; i < tempArr.length; i++){
		val = tempArr[i];
		for(let j = i+1; j < tempArr.length; j++)
		{
			val1 = tempArr[j];
			guess = 2020 - val - val1;
			if(tempArr.indexOf(guess) > 0){
				console.log("First Value: ", val);
				console.log("Second Value: ", val1);
				console.log("Second Value: ", guess);

				console.log("Product: ", val*guess*val1);
			}
		}
	}
	console.log(tempArr);
}
