import express from 'express';
import extractInputs from './utils';
import triggerGitlabPipeline from './clients/gitlab';

import dotenv from 'dotenv';

dotenv.config();

const host = process.env.HOST ? process.env.HOST : '0.0.0.0';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app: express.Application = express();

app.use(express.json());

app.post('/trigger', async (req, res) => {
	const body = req.body;
	const inputs = extractInputs(body);

	console.log('inputs:', inputs);

	const resultObject = {
		message: 'Triggered pipeline with the following inputs',
		inputs,
	};

	await triggerGitlabPipeline(inputs);

	res.status(200).send(resultObject);
});

app.listen(port, host, () => {
	console.log(`Listening on ${host}:${port}`);
});
