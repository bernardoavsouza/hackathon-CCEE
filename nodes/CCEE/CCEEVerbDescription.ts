import { INodeProperties } from 'n8n-workflow';

// When the resource `httpVerb` is selected, this `operation` parameter will be shown.
export const CCEEVerbOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['migracao'],
			},
		},
		options: [
			{
				name: 'Envio de Dados Cadastrais',
				value: 'post',
				action: 'Enviar dados cadastrais',
				routing: {
					request: {
						method: 'POST',
						url: '/migracoes',
					},
				},
			},
			{
				name: 'Consulta de Dados Cadastrais',
				value: 'get',
				action: 'Consultar dados cadastrais',
				routing: {
					request: {
						method: 'GET',
						url: '/migracoes',
					},
				},
			},
			{
				name: 'Atualização do Varejista',
				value: 'put',
				action: 'Atualizar varejista',
				routing: {
					request: {
						method: 'PUT',
						url: '=/migracoes/{{$parameter.id}}',
					},
				},
			},
			{
				name: 'Atualização Cadastral',
				value: 'put2',
				action: 'Atualizar cadastro',
				routing: {
					request: {
						method: 'PUT',
						url: '=/migracoes/{{$parameter.id}}',
					},
				},
			},
		],
		default: 'post',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['medicao'],
			},
		},
		options: [
			{
				name: 'Envio',
				value: 'post',
				action: 'Enviar',
				routing: {
					request: {
						method: 'POST',
						url: '/medicoes',
					},
				},
			},
			{
				name: 'Consulta de Medição',
				value: 'get',
				action: 'Consultar medição',
				routing: {
					request: {
						method: 'GET',
						url: '/medicoes',
					},
				},
			},
			{
				name: 'Status da Transação',
				value: 'get2',
				action: 'Consultar status da transação',
				routing: {
					request: {
						method: 'GET',
						url: '=/medicoes/status/{{$parameter.idTransacao}}',
					},
				},
			},
		],
		default: 'post',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['representante'],
			},
		},
		options: [
			{
				name: 'Solicitação de Troca',
				value: 'post',
				action: 'Solicitar',
				routing: {
					request: {
						method: 'POST',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/representante',
					},
				},
			},
			{
				name: 'Consulta',
				value: 'get',
				action: 'Consultar solicitação',
				routing: {
					request: {
						method: 'GET',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/representante/{{$parameter.idSolic}}',
					},
				},
			},
			{
				name: 'Aprovação/Rejeição',
				value: 'put',
				action: 'Aprovar ou rejeitar a solicitação',
				routing: {
					request: {
						method: 'PUT',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/representante/{{$parameter.idSolic}}',
					},
				},
			},
		],
		default: 'post',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['retornoAoCativo'],
			},
		},
		options: [
			{
				name: 'Solicitação de retorno',
				value: 'post',
				action: 'Solicitar',
				routing: {
					request: {
						method: 'POST',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/cativo',
					},
				},
			},
			{
				name: 'Consulta',
				value: 'get',
				action: 'Consultar solicitação',
				routing: {
					request: {
						method: 'GET',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/cativo/{{$parameter.idSolic}}',
					},
				},
			},
			{
				name: 'Aprovação/Rejeição',
				value: 'put',
				action: 'Aprovar ou rejeitar a solicitação',
				routing: {
					request: {
						method: 'PUT',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/cativo/{{$parameter.idSolic}}',
					},
				},
			},
		],
		default: 'post',
	},
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['suspensao'],
			},
		},
		options: [
			{
				name: 'Solicitação de Suspensão',
				value: 'post',
				action: 'Solicitar',
				routing: {
					request: {
						method: 'POST',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/suspensao',
					},
				},
			},
			{
				name: 'Consulta',
				value: 'get',
				action: 'Consultar',
				routing: {
					request: {
						method: 'GET',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/suspensao/{{$parameter.idSolic}}',
					},
				},
			},
			{
				name: 'Aprovação/Rejeição',
				value: 'put',
				action: 'Aprovação ou rejeição',
				routing: {
					request: {
						method: 'PUT',
						url: '=/solicitacoes/{{$parameter.idMigracao}}/suspensao/{{$parameter.idSolic}}',
					},
				},
			},
		],
		default: 'post',
	},
];

// Here we define what to show when the `get` operation is selected.
// We do that by adding `operation: ["get"]` to `displayOptions.show`
const getOperation: INodeProperties[] = [
	{
		displayName: 'ID Da Transação',
		name: 'idTransacao',
		required: true,
		displayOptions: {
			show: {
				resource: ['medicao'],
				operation: ['get2'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'ID da Migração',
		name: 'idMigracao',
		required: true,
		description:
			'Para todas as solicitações será necessário enviar o ID do cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['get'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'ID da Solicitação',
		name: 'idSolic',
		required: true,
		description:
			'Após o cadastramento da solicitação é retornado o idSolic que será usado para fazer a consulta e atualização da requisição.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['get'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'Type of Data',
		name: 'typeofData',
		default: 'query',
		description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
		displayOptions: {
			show: {
				resource: ['migracao', 'medicao'],
				operation: ['get'],
			},
		},
		options: [
			{
				name: 'Query Parameter',
				value: 'query',
			},
		],
		required: true,
		type: 'options',
	},
	{
		displayName: 'Query Parameters',
		name: 'arguments',
		default: {},
		description: "The request's query parameters",
		displayOptions: {
			show: {
				resource: ['migracao', 'medicao'],
				operation: ['get'],
				typeofData: ['query'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						description: 'Key of query parameter',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'query',
							},
						},
						required: true,
						description: 'Value of query parameter',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
];

// Here we define what to show when the DELETE Operation is selected.
// We do that by adding `operation: ["delete"]` to `displayOptions.show`
const postOperation: INodeProperties[] = [
	{
		displayName: 'ID da Migração',
		name: 'idMigracao',
		required: true,
		description:
			'Para todas as solicitações será necessário enviar o ID do cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['post'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'Type of Data',
		name: 'typeofData',
		default: 'jsonData',
		description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
		displayOptions: {
			show: {
				resource: ['migracao', 'medicao', 'representante', 'retornoAoCativo', 'suspensao'],
				operation: ['post'],
			},
		},
		options: [
			{
				name: 'JSON',
				value: 'jsonData',
			},
		],
		required: true,
		type: 'options',
	},
	{
		displayName: 'JSON Object',
		name: 'arguments',
		default: {},
		description: "The request's JSON properties",
		displayOptions: {
			show: {
				resource: ['migracao', 'medicao', 'representante', 'retornoAoCativo', 'suspensao'],
				operation: ['post'],
				typeofData: ['jsonData'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of JSON property',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'body',
							},
						},
						required: true,
						description: 'Value of JSON property',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
	{
		displayName: 'test',
		name: 'typeofData',
		default: Date(),
		description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['post'],
			},
		},
		routing: {
			send: {
				property: 'codigoConectado',
				type: 'body',
			},
		},
		required: true,
		type: 'number',
	},
];

const putOperation: INodeProperties[] = [
	{
		displayName: 'ID da Migração',
		name: 'idMigracao',
		required: true,
		description:
			'Para todas as solicitações será necessário enviar o ID do cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['put'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		required: true,
		description: 'ID gerado após o cadastro da unidade consumidora.',
		displayOptions: {
			show: {
				resource: ['migracao'],
				operation: ['put', 'put2'],
			},
		},
		default: '',
	},
	{
		displayName: 'ID da Solicitação',
		name: 'idSolic',
		required: true,
		description:
			'Após o cadastramento da solicitação é retornado o idSolic que será usado para fazer a consulta e atualização da requisição.',
		displayOptions: {
			show: {
				resource: ['representante', 'retornoAoCativo', 'suspensao'],
				operation: ['put'],
			},
		},
		type: 'string',
		default: '',
	},
	{
		displayName: 'Type of Data',
		name: 'typeofData',
		default: 'jsonData',
		description: 'Select type of data to send [Query Parameter Arguments, JSON-Body]',
		displayOptions: {
			show: {
				resource: ['migracao', 'representante', 'retornoAoCativo', 'suspensao'],
				operation: ['put', 'put2'],
			},
		},
		options: [
			{
				name: 'JSON',
				value: 'jsonData',
			},
		],
		required: true,
		type: 'options',
	},
	{
		displayName: 'JSON Object',
		name: 'arguments',
		default: {},
		description: "The request's JSON properties",
		displayOptions: {
			show: {
				resource: ['migracao', 'representante', 'retornoAoCativo', 'suspensao'],
				operation: ['put', 'put2'],
				typeofData: ['jsonData'],
			},
		},
		options: [
			{
				name: 'keyvalue',
				displayName: 'Key:Value',
				values: [
					{
						displayName: 'Key',
						name: 'key',
						type: 'string',
						default: '',
						required: true,
						description: 'Key of JSON property',
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						routing: {
							send: {
								property: '={{$parent.key}}',
								type: 'body',
							},
						},
						required: true,
						description: 'Value of JSON property',
					},
				],
			},
		],
		type: 'fixedCollection',
		typeOptions: {
			multipleValues: true,
		},
	},
];

export const CCEEVerbFields: INodeProperties[] = [
	/* -------------------------------------------------------------------------- */
	/*                                httpVerb:get                                */
	/* -------------------------------------------------------------------------- */
	...getOperation,

	/* -------------------------------------------------------------------------- */
	/*                              httpVerb:delete                               */
	/* -------------------------------------------------------------------------- */
	...postOperation,
	...putOperation,
];
