// brute force -> checking every sum
const additions1 = (array, number) => {
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

// pretty much the same, only using indexOf instead of second loop
const additions2 = (array, number) => {
	let len = array.length;
	let right = [];
	let answer = [];
	for (var i = 0; i < len; i++) {
		let a = number-array[i];
		if (array.slice(i+1).indexOf(a) !== -1
				&& !(answer.includes(array[i], a)) 
				&& !(answer.includes(a, array[i]))) {
			answer.push([array[i], a]);
		}
	}
	return answer;
}

// testing with random arrays
const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) ) + min;

const generateArray = (size) => {
	let tempArr = [];
	for(var i = 0; i < size; i++) {
		tempArr.push(getRndInteger(-200, 200));
	}
	return tempArr;
}

const time1 = [];
const time2 = [];
let ans1 = [];
let ans2 = [];

for (var i = 50000; i <= 1000000; i+= 50000) {
	let ar = generateArray(i);
	var old_time = new Date();
		additions1(ar,0);
	var new_time = new Date();
	ans1[i] = new_time - old_time;
	
	var old_time = new Date();
		additions2(ar,0);
	var new_time = new Date();
	ans2[i] = new_time - old_time;
}
console.log(ans1, ans2);
