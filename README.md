# Port Typescript API GitLab Trigger

This project includes a basic API that can receive a request from Port's Agent, extract the inputs and then make a request to the specified GitLab pipeline to trigger it with the provided inputs.

# Setup

Create a `.env` file in the directory of the project with the following keys:

```
HOST=<YOUR_API_HOST>
PORT=<YOUR_API_PORT>
GITLAB_HOST=<YOUR_GITLAB_HOST>
GITLAB_TOKEN=<GITLAB_PERSONAL_ACCESS_TOKEN>
GITLAB_TRIGGER_TOKEN=<GITLAB_PIPELINE_TRIGGER_TOKEN>
GITLAB_BRANCH=<GITLAB_TARGET_BRANCH>
GITLAB_PROJECT_ID=<GITLAB_PROJECT_ID>

```

Install packages:

```
npm install
```

To run in development mode:

```
npm run dev
```

To create a production build:

```
npm run build
```

The resulting build will be in the `dist` directory

The API provided here expects a POST request to be sent to the `/trigger` route, in [Port](https://app.getport.io), use the following invocation method:

```
"invocationMethod": {
	"type": "WEBHOOK",
	"url": "{API_HOST}:{API_PORT}/trigger",
	"agent": true
}
```
