import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import errorhandler from 'error-handler';
import * as dataBaseServices from './services/DataBaseServices';

import authRouter from './routes/auth';

import {serverConfig} from './config/config.json';

const app = express();

dataBaseServices.setUpConnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin: '*'}));

app.use('/auth', authRouter);

app.use(errorhandler);

const port = serverConfig.port || 3000;

const server = app.listen(port, err => {
    if (err)
        throw err;
    console.log(`Server is runing on ${port}`);
});

