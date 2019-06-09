//console.log('Starting app.js');
//builtin modules
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

//my modules
const notes = require('./notes.js');

const argv = yargs
	.command('add' , 'Add a new note' , {
		title: {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		},
		body: {
			describe : 'description of note',
			demand: true,
			alias: 'b'
		}
	})
	.command('list' , 'list all notes')
	.command('read' , 'read a note with given title' , {
		title:{
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.command('remove' , 'To remove a note with given title' , {
		title:{
			describe: 'Title of note',
			demand: true,
			alias: 't'
		}
	})
	.help()
	.argv;


var command = argv._[0];
var arguement = command;
//console.log(module);	
if (arguement === "add")
{
	//console.log(argv);
	//console.log(argv.title , argv.body);
	if (argv.title == true)
		console.log("Enter proper input");
	else
	{
		var notification = notes.addNote(argv.title , argv.body);
		console.log("Status: " , notification);
	}
}
else if (arguement === "remove")
{
	if (argv.title == true)
		console.log("Enter proper input");
	else
	{
		notes.removeNote(argv.title);
	}
}
else if (arguement === "list"){
	console.log("Listing notes");
	notes.getAll();
}
else if (arguement === "read")
{
	if (argv.title == true)
		console.log("Enter proper input");
	else
	{
		notes.readNote(argv.title);
	}
}
else
	console.log("Command not supported");
	
