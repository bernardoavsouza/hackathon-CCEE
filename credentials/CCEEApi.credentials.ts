import {
	IAuthenticateGeneric,
	ICredentialDataDecryptedObject,
	ICredentialTestRequest,
	ICredentialType,
	IHttpRequestHelper,
	INodeProperties,
} from 'n8n-workflow';

export class CCEEApi implements ICredentialType {
	name = 'cceeApi';
	displayName = 'CCEE API';
	documentationUrl = 'https://documenter.getpostman.com/view/30322966/2sA35A96FA';
	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientID',
			type: 'string',
			default: '',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'hidden',
			typeOptions: {
				expirable: true,
			},
			default: '',
		},
		{
			displayName: 'BaseURL',
			name: 'baseURL',
			type: 'hidden',
			default: 'https://am-api.ccee.org.br/oauth/token',
		},
	];

	async preAuthentication(this: IHttpRequestHelper, credentials: ICredentialDataDecryptedObject) {
		// make reques to get access token

		const url = `${credentials.baseURL}`;

		type IDetails = {
			client_id: string;
			client_secret: string;
		};
		let details: IDetails = {
			client_id: credentials.clientID.toLocaleString(),
			client_secret: credentials.clientSecret.toLocaleString(),
		};
		const keys = Object.keys(details) as Array<keyof typeof details>;

		let bodyList = keys.map((key) => {
			let encodedKey = encodeURIComponent(key);
			let encodedValue = encodeURIComponent(details[key]);
			return encodedKey + '=' + encodedValue;
		});

		let body = bodyList.join('&');
		console.log(body, url);
		// let formBody: string[] = [];
		// for (let property in details) {
		// 	console.log(details[property]);
		// 	let encodedKey = encodeURIComponent(property);
		// 	let encodedValue = encodeURIComponent(details[property]);
		// 	formBody.push(encodedKey + '=' + encodedValue);
		// }
		// let body = formBody.join('&');

		const response = await this.helpers.httpRequest({
			// method: 'POST',
			// url: url,
			// headers: {
			// 	'Content-Type': 'application/x-www-form-urlencoded',
			// },
			// body: body,
			method: 'POST',
			url: url,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: body,
		});

		return { accessToken: response.access_token };
	}

	// This allows the credential to be used by other parts of n8n
	// stating how this credential is injected as part of the request
	// An example is the Http Request node that can make generic calls
	// reusing this credential
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '={{$credentials.accessToken}}',
			},
		},
	};

	// The block below tells how this credential can be tested
	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://am-api.ccee.org.br/hackathon/migracoes?codigoUnidadeConsumidora=<string>&codigoConectado=<string>&codigoVarejista=<string>&id=<string>',
			url: '',
			method: 'GET',
		},
	};
}
