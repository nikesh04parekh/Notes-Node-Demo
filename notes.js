//console.log('Starting notes.js');

//builtin modules
const fs = require('fs');

var fetchNotes = () => {
	
	try{
		let notes = fs.readFileSync("notes-data.json");
		return JSON.parse(notes);
	}catch(e) {
		return [];
	}
};

var saveNotes = (notes) => {
	fs.writeFileSync("notes-data.json" , JSON.stringify(notes));
};
var addNote = (title , body) => {
	console.log("Adding Note" , title , body);
	notes = fetchNotes();

	var note = {
		title,
		body
	};

	duplicates = notes.filter((note) => note.title == title);
	if (duplicates.length === 0)
	{
		notes.push(note);
		saveNotes(notes);
		var notify = `Note added successfully with title = ${note.title} and body = ${note.body}`;
		return notify;
	}
	else
	{
		var notify = `Note already exists with title = ${note.title}`;
		return notify;
	}
};

var getAll = () => 
{
	console.log("Getting all notes");
	var notes = fetchNotes();
	if (notes.length === 0)
	{
		console.log("There are no notes in the database uptil now");
	}
	else
	{
		for (var i = 0 ; i < notes.length ; i++)
			console.log(notes[i].title , notes[i].body);
	}
};

var readNote = (title) => {
	console.log("reading a note");
	var notes = fetchNotes();
	if (notes.length === 0)
	{
		console.log("There are no notes in the database uptil now");
	}
	else
	{
		matchingNotes = notes.filter((note) => note.title === title);
		if (matchingNotes.length === 0)
		{
			console.log(`No notes with title = ${title} exists.`);
		}
		else
		{
			for (var i = 0 ; i < matchingNotes.length ; i++)
				console.log(matchingNotes[i].title , matchingNotes[i].body);
		}
	}
};

var removeNote = (title) => 
{
	console.log(`Removing note with title = ${title}`);
	var notes = fetchNotes();
	if (notes.length === 0)
	{
		console.log("There are no notes in the database uptil now");
	}
	else
	{
		var duplicateNotes = notes.filter((note) => note.title !== title);
		if (duplicateNotes.length === notes.length)
			console.log(`No notes with title = ${title} exists.`);
		else
		{
			saveNotes(duplicateNotes);
			console.log(`Note with title = ${title} removed.`);
		}
	}
};

module.exports = {
	getAll,
	addNote,
	readNote,
	removeNote
};