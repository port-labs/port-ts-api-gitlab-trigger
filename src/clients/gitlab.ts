import { BtTriggerGitlabPipelineInputs } from '../types';
import { Gitlab } from '@gitbeaker/node';
import dotenv from 'dotenv';

dotenv.config();

const api = new Gitlab({
	host: process.env.GITLAB_HOST,
	token: process.env.GITLAB_TOKEN,
});

const PROJECT_ID = process.env.GITLAB_PROJECT_ID;

const branchName = process.env.GITLAB_BRANCH;

const triggerToken = process.env.GITLAB_TRIGGER_TOKEN;

const triggerGitlabPipeline = async (variables: BtTriggerGitlabPipelineInputs) => {
	if (PROJECT_ID && branchName && triggerToken) {
		const result = await api.Triggers.pipeline(PROJECT_ID, branchName, triggerToken, {
			variables,
		});
		console.log(result);
	}
};

export default triggerGitlabPipeline;
