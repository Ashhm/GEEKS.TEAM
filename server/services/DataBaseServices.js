import mongoose from 'mongoose';
import bluebird from 'bluebird';

import {dataBaseConfig} from '../config/config.json';

export async function setUpConnection() {
    let mongoHost = `${dataBaseConfig.host}:${dataBaseConfig.port}/${dataBaseConfig.name}`;

    mongoose.Promise = bluebird;

    try {
        await mongoose.connect(`mongodb://${mongoHost}`, {useMongoClient: true});
    } catch (err) {
        throw err;
    }
}