import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import wakeDyno from './helpers/wakeDyno.js';

const apiUrl = process.env.SAPPER_APP_API_URL;

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(compression({ threshold: 0 }), sirv('static', { dev }), sapper.middleware())
	.listen(PORT, () => {
		wakeDyno(apiUrl);
	});
