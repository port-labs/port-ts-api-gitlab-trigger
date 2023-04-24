import { BtTriggerGitlabPipelineInputs, RunInvocation } from './types';

const extractInputs = (eventObject: RunInvocation): BtTriggerGitlabPipelineInputs => {
	const userInputs = eventObject.payload;

	if ('properties' in userInputs) {
		return userInputs.properties as BtTriggerGitlabPipelineInputs;
	}

	return {
		BT_APP_ID: '',
		BT_APP_TYPE: '',
		BT_PROJECT_NAME: '',
		BT_PROJECT_DESCRIPTION: '',
		BT_TEAM_NAME: '',
		BT_CODE_OWNERS: '',
	};
};

export default extractInputs;
