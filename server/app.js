// добавить заметку
// просмотреть заметку
// удалить заметку

// express - web framework для приложений node.js

import express from 'express';
import bodyParser from 'body-parser';
import * as db from './utils/DataBaseUtils.js';
import {serverPort} from '../etc/config.json';

// создаем приложение

db.setUpConnection();

const app = express();

// мидлверы

app.use(bodyParser.json());



// роуты
app.get('/notes', (req, res) => {
	db.listNotes().then(data => res.send(data));

});

app.post('/notes', (req, res) => {
	db.createNote(req.body).then(data => res.send(data));
});

app.delete('/notes/:id', (req, res) => {
	db.deleteNote(req.params.id).then(data=>res.send(data));
});


// запускаем сервер
const server = app.listen (serverPort, () => {
	console.log (`Server is up and running on port ${serverPort}`);
});