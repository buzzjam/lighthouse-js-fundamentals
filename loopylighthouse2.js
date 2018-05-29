function loopyLighthouse (range, multiples, words) {
	var val = 0;
	for (var i = range[0]; i <= range[1]; i++) {
		val = i;
		if (i % multiples[0] === 0){
			val = words[0]
		}

		if(i % multiples[1] === 0){
			val = words[1];
		}

		if(i % (multiples[0] * multiples [1]) === 0){
			val = words[0] + words[1];
		}

		console.log(val);
	}
}
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);