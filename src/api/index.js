import request from 'superagent';

import {apiConfig} from '../config/config.json';

let host = `${apiConfig.host}:${apiConfig.port}`;

//should return request, witch should be handle by async/await in Dispatcher
export function signin(data) {
    return request.post(`${host}/auth/signin`).send(data);
}

export function signup(data) {
    return request.post(`${host}/auth/signup`).send(data);
}