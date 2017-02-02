import mongoose from 'mongoose';
import '../models/Note';
// что вот это за странный импорт такой?
// импортит ли он весь файл? почему я не могу получить доступ к его переменным тогда?
// чушь какая-то

import config from '../../etc/config.json';

const Note = mongoose.model('Note'); 
// почему тут стало mongoose.model('Note')
// короче не понимаю я, что мы этой строчкой сделали, если мы создали модель, то я не понимаю,
// почему кроме названия схемы не указали собственно ссылку на нее

// подключаемся к базе данных
export function setUpConnection(){
	mongoose.connect (`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listNotes(){
	return Note.find();
}

export function createNote(data){
	const note = new Note({
		title: data.title,
		text: data.text,
		color: data.color,
		createdAt: new Date()
	});

	return note.save();
}

export function deleteNote(id){
	return Note.findById(id).remove();
}