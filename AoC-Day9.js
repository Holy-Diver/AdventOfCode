var fs = require('fs');


// puzzle1();
sum([1,2,3,4,5]);

function puzzle1(){
	const fileName = 'Day9-Input-Example.txt';
	const data = fs.readFileSync(fileName,'utf8').split('\n');

	const preamble = 5;
	let val;
	for(let i = preamble; i < data.length; i++)
	{
		for(let j = i - preamble; j < i; j++){
			val = data[i] - data[j];
			if (data.indexOf(val) < i || data.indexOf(val) > i) console.log(+data[i] + +data[j]);
			// console.log(data[i],'\t',data[j]);
		}
		// console.log(data[i]);
	}
	// console.log(data);
} 

function sum(arr,val){
	for(let i = 0; i < arr.length; i++){
		for(let j = i+1; j < arr.length; j++)
		{

			console.log(arr[i],'+',arr[j]);
		}
	}
}