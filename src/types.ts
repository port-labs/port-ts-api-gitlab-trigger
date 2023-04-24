export type UserStatus = 'INVITED' | 'ACTIVE' | 'ADDED';

export declare enum DestinationTypes {
	KAFKA = 'KAFKA',
	WEBHOOK = 'WEBHOOK',
	GITHUB = 'GITHUB',
	AZURE_DEVOPS = 'AZURE-DEVOPS',
}

export interface IWithProtection {
	protected: boolean;
}

export type Org = {
	id: string;
	contactUserId: string | null;
	name: string;
	createdAt: Date;
	updatedAt: Date;
};

export type Role = IWithProtection & {
	id: string;
	orgId: string;
	extendsId: string | null;
	isAdmin: boolean;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
};

export type Team = {
	id: string;
	orgId: string;
	name: string;
	description: string | null;
	provider: string;
	createdAt: Date;
	updatedAt: Date;
};

export type User = {
	id: string;
	email: string;
	firstName: string | null;
	lastName: string | null;
	phoneNumber: string | null;
	picture: string | null;
	status: UserStatus;
	createdAt: Date;
	updatedAt: Date;
	providers: string[];
};

export type PartialUserWithRelatedData = Partial<User> & {
	orgs?: Partial<Org>[];
	teams?: Partial<Team>[];
	roles?: Partial<Role>[];
};

export type Statuses = 'TRIGGERED' | 'SUCCESS' | 'FAILURE';

export type ResourceType = 'entity' | 'blueprint' | 'run';

export type InvocationGithub = {
	type: DestinationTypes.GITHUB;
	org: string;
	repo: string;
	workflow: string;
	omitPayload?: boolean;
	omitUserInputs?: boolean;
	reportWorkflowStatus?: boolean;
};
export type InvocationAzureDevOps = {
	type: DestinationTypes.AZURE_DEVOPS;
	org: string;
	repo: string;
	webhook: string;
};

export type InvocationMethod =
	| {
			type: DestinationTypes.KAFKA;
	  }
	| {
			type: DestinationTypes.WEBHOOK;
			agent?: boolean;
			url: string;
	  }
	| InvocationGithub
	| InvocationAzureDevOps;

export interface IWithTrigger {
	trigger: {
		by: {
			userId?: string;
			appId?: string;
			orgId: string;
			user?: PartialUserWithRelatedData;
		};
		origin: 'UI' | 'API';
		at: Date;
	};
}

export interface IBaseChangeLogEvent {
	action: string;
	status: Statuses;
	resourceType: ResourceType;
	additionalData: any;
}

export interface IBaseRunEvent extends IBaseChangeLogEvent {
	action: string;
	status: 'TRIGGERED';
	resourceType: 'run';
	additionalData: {
		action: {
			invocationMethod: InvocationMethod;
		};
	};
}

export type IBaseEvent = IWithTrigger;

export type RunInvocation = {
	action: string;
	status: string;
	resourceType: 'run';
	context: {
		blueprint?: string;
		entity?: string;
		runId?: string;
	};
	payload: object;
} & IWithTrigger;

export type BtTriggerGitlabPipelineInputs = {
	BT_APP_ID: string;
	BT_APP_TYPE: string;
	BT_PROJECT_NAME: string;
	BT_PROJECT_DESCRIPTION: string;
	BT_TEAM_NAME: string;
	BT_CODE_OWNERS: string;
};
