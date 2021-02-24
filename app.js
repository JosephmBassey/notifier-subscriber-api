//Require all that's needed to power this App

import express, { json, urlencoded } from 'express';
import expressValidator from 'express-validator';
import cors from 'cors'
import { join } from 'path';
import morgan from 'morgan';
import { createStream } from 'rotating-file-stream';
import MessagesRoute from './routes/v1/MessagesRoute';

const app = express();
// allow cors
app.use(cors());


// create a rotating write stream
const accessLogStream = createStream('access.log', {
    interval: '1d', // rotate daily
    path: join(__dirname, 'logs')
});

app.use(json());
app.use(
    urlencoded({
        extended: true,
    }),
);
app.use(morgan('combined', { stream: accessLogStream }));
//allowing for serving static files
app.use(express.static('public'));

app.use(expressValidator());


app.use('/', express.static(__dirname + '/public/'));

app.get('/apidoc', (req, res) => {
    res.sendFile(join(__dirname, 'public/', 'index.html'));
});

// Routes where Incoming Message/event will be receive
app.use('/api/v1/messages', MessagesRoute);

//default landing:
app.all('*', (req, res) => {
    res.status(404).send({
        status: 'failed',
        status_code: 404,
        message: 'Resource not found'
    });
});



module.exports = app;
