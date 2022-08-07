import fs from 'fs';
const file = './build/index.html';

fs.readFile(file, 'utf8', function (err, data) {
	if (err) {
		return console.log(err);
	}
	var result = data
		.replace(/start\(\{/g, 'requestIdleCallback(()=>start({')
		.replace(/\}\);/g, '}));');

	fs.writeFile(file, result, 'utf8', function (err) {
		if (err) return console.log(err);
	});
});
