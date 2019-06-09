console.log("Starting json.js");

const fs = require('fs');
const yargs = require('yargs');

// var argv = yargs.argv;

var originalString = {
	title: 'Some title',
	body: 'Some body'
};

console.log(originalString);
var originalStringNote = JSON.stringify(originalString);

fs.writeFileSync('test.txt' , originalStringNote);

var noteString = fs.readFileSync('test.txt');

var note = JSON.parse(noteString);

console.log(note.title);