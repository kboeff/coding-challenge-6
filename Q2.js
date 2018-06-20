const input = [2, 3, 2, -1, 0, 5, 4, -2, 6, 5, 23, 3, 9];

// checking every sum
const additions = (array, number) => {
	let len = array.length;
	let right = [];
	let answer = [];
	for (var i = 0; i < len; i++) {
		for (var j = i + 1; j < len; j++) {

			if (array[i] + array[j] === number 
				&& !(answer.includes(array[i], array[j])) 
				&& !(answer.includes(array[j], array[i]))) {
				answer.push([array[i], array[j]]);
				break;
			}
		}
	}
	return answer;
}
console.log(additions(input, 4));
