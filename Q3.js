let hex = "#ffaa22";

const hexToRgb = (input) => {
	let answer = "";
	if(input.includes("rgb")) {
		input = input.replace("rgb", "")
					 .replace("(", "")
					 .replace(")", "")
					 .split(",");
		answer += "#";
		for(let i in input) {
			let hex = input[i];
			hex.trim(); // remove spaces
			hex = parseInt(hex).toString(16); // convert to hex
			if(hex.length === 1) 
				hex = "0" + hex; // fill a zero if necessary
			
			answer += hex; 
		}
	} else {
		input = input.replace("#", ""); //remove the # if necessary
		const red = parseInt(input.substr(0,2), 16);
		const green = parseInt(input.substr(2,2), 16);
		const blue = parseInt(input.substr(4), 16);
		
		answer = "rgb(" + red + "," + green + "," + blue + ")";
	}
	return answer;
}

hexToRgb(hex);
