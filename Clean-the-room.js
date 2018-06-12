// test input ... [1,2,"20","20","3","1",4,591,392,391,2,5,10,2,1,1,1,20,20]
let inp = document.getElementById("messy-data");
let button = document.getElementById("org-btn");
let result = document.getElementById("result1");

const organize = (input) => {
	let output = [];
	const ints = [];
	const strings = [];
	const counts = [];
	
	// keep track of the count of input items
	for (let i in input) {
		let item = input[i];
		// associative array keys (object properties) are stored as strings
		// so we need to distinct between int and string here again
		if(typeof item === 'string') {
			item += 's';
			console.log(item);
		}

		if (counts[item] === undefined)
			counts[item] = 1;
		else
			counts[item]++;
	}
	
	// use counts to fill output array
	for (let index in counts) {
		let temp = [];
		let count = counts[index];
		
		if(index.includes('s')) {
			for (let k = 0; k < count; k++)
				temp.push(index.replace('s', ''));
			strings.push(temp);
			
		} else {
			for (let k = 0; k < count; k++)
				temp.push(parseInt(index));
			ints.push(temp);
		}
	}	
	if(ints.length !== 0) {
		if(strings.length !== 0) {
			output.push(ints);
			output.push(strings);
		} else
			output = ints.slice();
		
	} else if(strings.length !== 0) 
		output = strings.slice();
	
	return output;
}

var addAnswer = () => {
	const input = inp.value.split(',').forEach(val => val );
	console.log(typeof input, input);
	// presort the data to keep string types in the end
	input.sort(function(a,b) {
	  if (typeof a === 'string' || typeof b === 'string') {
		return a > b ? 1 : -1;
	  }
	  return a - b;
	});
	result.innerHTML = organize(input);
	console.log(result.innerHTML);
}



button.addEventListener("click", addAnswer);

