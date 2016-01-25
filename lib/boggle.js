'use strict';

const boggle = function boggle(tray, coPairs) {



	let word = '';
	let x;
	let y;

	for (let i = 0; i < coPairs.length; i++) {

		x = coPairs[i][0];
		y = coPairs[i][1];

		// if (((coPairs[i+1][0] > x + 1) || coPairs[i+1][0] < x - 1))
		// 	|| ((coPairs[i+1][1] > y - 1) || coPairs[i+1][1] < y + 1)) {

		// 	continue;

		word += tray[(4 * x) + y];
	}

return word;

};

const bigBoggle = function bigBoggle(tray, coPairs) {

	let word = '';
	let x;
	let y;

	for (let i = 0; i < coPairs.length; i++) {

		x = coPairs[i][0];
		y = coPairs[i][1];

		// if (((coPairs[i+1][0] > x + 1) || coPairs[i+1][0] < x - 1))
		// 	|| ((coPairs[i+1][1] > y - 1) || coPairs[i+1][1] < y + 1)) {

		// 	continue;

		word += tray[(5 * x) + y];
	}

return word;
};

const superBigBoggle = function superBigBoggle(tray, coPairs) {

	let word = '';
	let x;
	let y;

	for (let i = 0; i < coPairs.length; i++) {

		x = coPairs[i][0];
		y = coPairs[i][1];

		// if (((coPairs[i+1][0] > x + 1) || coPairs[i+1][0] < x - 1))
		// 	|| ((coPairs[i+1][1] > y - 1) || coPairs[i+1][1] < y + 1)) {

		// 	continue;

		word += tray[(6 * x) + y];
	}

return word;
};

module.exports = {
	boggle,
	bigBoggle,
	superBigBoggle,
};